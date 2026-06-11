#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import json
import os
import re
import sqlite3
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("GUESTBOOK_DB_PATH", ROOT / "guestbook.sqlite3"))
IS_LOCAL = not os.environ.get("PORT")
ADMIN_PASSWORD = os.environ.get("GUESTBOOK_ADMIN_PASSWORD") or ("vivi-admin" if IS_LOCAL else "")


def utc_now():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def connect():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with connect() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS messages (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              contact TEXT,
              message TEXT NOT NULL,
              status TEXT NOT NULL DEFAULT 'pending',
              created_at TEXT NOT NULL
            )
            """
        )
        conn.commit()


def row_to_dict(row, include_contact=True):
    data = {
        "id": row["id"],
        "name": row["name"],
        "message": row["message"],
        "status": row["status"],
        "created_at": row["created_at"],
    }
    if include_contact:
        data["contact"] = row["contact"] or ""
    return data


class PortfolioHandler(SimpleHTTPRequestHandler):
    server_version = "PortfolioGuestbook/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Admin-Token, Accept")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json(self):
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length > 20_000:
            raise ValueError("Payload too large")
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw or "{}")

    def require_admin(self):
        token = self.headers.get("X-Admin-Token", "")
        return token == ADMIN_PASSWORD

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/messages":
            with connect() as conn:
                rows = conn.execute(
                    "SELECT id, name, contact, message, status, created_at FROM messages WHERE status = 'approved' ORDER BY created_at DESC LIMIT 50"
                ).fetchall()
            self.send_json({"messages": [row_to_dict(row, include_contact=False) for row in rows]})
            return

        if parsed.path == "/api/admin/messages":
            if not self.require_admin():
                self.send_json({"error": "Unauthorized"}, 401)
                return
            with connect() as conn:
                rows = conn.execute(
                    "SELECT id, name, contact, message, status, created_at FROM messages ORDER BY created_at DESC LIMIT 200"
                ).fetchall()
            self.send_json({"messages": [row_to_dict(row) for row in rows]})
            return

        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/messages":
            try:
                data = self.read_json()
                name = str(data.get("name", "")).strip()
                contact = str(data.get("contact", "")).strip()
                message = str(data.get("message", "")).strip()
                if not name or not message:
                    self.send_json({"error": "Name and message are required"}, 400)
                    return
                if len(name) > 60 or len(contact) > 120 or len(message) > 600:
                    self.send_json({"error": "Input is too long"}, 400)
                    return
                with connect() as conn:
                    cursor = conn.execute(
                        "INSERT INTO messages (name, contact, message, status, created_at) VALUES (?, ?, ?, 'pending', ?)",
                        (name, contact, message, utc_now()),
                    )
                    conn.commit()
                self.send_json({"ok": True, "id": cursor.lastrowid, "status": "pending"}, 201)
            except (json.JSONDecodeError, ValueError):
                self.send_json({"error": "Invalid request"}, 400)
            return

        if parsed.path == "/api/admin/login":
            try:
                data = self.read_json()
            except (json.JSONDecodeError, ValueError):
                self.send_json({"error": "Invalid request"}, 400)
                return
            if str(data.get("password", "")) == ADMIN_PASSWORD:
                self.send_json({"ok": True})
            else:
                self.send_json({"error": "Invalid password"}, 401)
            return

        self.send_json({"error": "Not found"}, 404)

    def do_PATCH(self):
        parsed = urlparse(self.path)
        match = re.fullmatch(r"/api/admin/messages/(\d+)", parsed.path)
        if not match:
            self.send_json({"error": "Not found"}, 404)
            return
        if not self.require_admin():
            self.send_json({"error": "Unauthorized"}, 401)
            return
        try:
            data = self.read_json()
        except (json.JSONDecodeError, ValueError):
            self.send_json({"error": "Invalid request"}, 400)
            return
        status = str(data.get("status", "")).strip()
        if status not in {"pending", "approved", "rejected"}:
            self.send_json({"error": "Invalid status"}, 400)
            return
        message_id = int(match.group(1))
        with connect() as conn:
            cursor = conn.execute("UPDATE messages SET status = ? WHERE id = ?", (status, message_id))
            conn.commit()
        if cursor.rowcount == 0:
            self.send_json({"error": "Message not found"}, 404)
            return
        self.send_json({"ok": True, "id": message_id, "status": status})

    def do_DELETE(self):
        parsed = urlparse(self.path)
        match = re.fullmatch(r"/api/admin/messages/(\d+)", parsed.path)
        if not match:
            self.send_json({"error": "Not found"}, 404)
            return
        if not self.require_admin():
            self.send_json({"error": "Unauthorized"}, 401)
            return
        message_id = int(match.group(1))
        with connect() as conn:
            cursor = conn.execute("DELETE FROM messages WHERE id = ?", (message_id,))
            conn.commit()
        if cursor.rowcount == 0:
            self.send_json({"error": "Message not found"}, 404)
            return
        self.send_json({"ok": True, "id": message_id})


def main():
    init_db()
    port = int(os.environ.get("PORT", "8800"))
    host = os.environ.get("HOST", "127.0.0.1" if IS_LOCAL else "0.0.0.0")
    server = ThreadingHTTPServer((host, port), PortfolioHandler)
    display_host = "127.0.0.1" if host in {"0.0.0.0", "::"} else host
    print(f"Portfolio guestbook server running at http://{display_host}:{port}/index.html")
    print(f"Admin page: http://{display_host}:{port}/admin.html")
    if IS_LOCAL and ADMIN_PASSWORD == "vivi-admin":
        print("Local default admin password: vivi-admin")
    elif not ADMIN_PASSWORD:
        print("WARNING: GUESTBOOK_ADMIN_PASSWORD is not set; admin login is disabled.")
    server.serve_forever()


if __name__ == "__main__":
    main()

# Portfolio Deployment Notes

## Update GitHub Without Terminal

1. Open the GitHub repository page.
2. Click `Add file` -> `Upload files`.
3. Drag these updated files/folders into GitHub:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`
   - `.gitignore`
   - `server.py`
   - `admin.html`
4. Do not upload:
   - `guestbook.sqlite3`
   - `.DS_Store`
   - `.git/`
5. Click `Commit changes`.

## Important

GitHub Pages can show the static website, but it cannot run `server.py`.
The guestbook backend needs a Python hosting service.

## Local Guestbook

Run:

```bash
python3 server.py
```

Then open:

```text
http://127.0.0.1:8800/index.html
http://127.0.0.1:8800/admin.html
```

Local default admin password:

```text
vivi-admin
```

## Hosted Guestbook Backend

When deploying to a Python host, set these environment variables:

```text
GUESTBOOK_ADMIN_PASSWORD=choose-a-private-password
GUESTBOOK_DB_PATH=/path/to/persistent/guestbook.sqlite3
```

Start command:

```bash
python3 server.py
```

## Two Hosting Options

### Option A: Host the whole site on the Python backend

Use the Python host URL as your main website URL.
This is the simplest way to make the guestbook work because `server.py` serves both the website and the API.

### Option B: Keep GitHub Pages for the website and use a separate backend

After the Python host gives you a backend URL, open `index.html` and `admin.html`, then set:

```html
<meta name="guestbook-api-base" content="https://your-backend-url.example.com" />
```

If this value is empty, the page will use the same domain as the website.

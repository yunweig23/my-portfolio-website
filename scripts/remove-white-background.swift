import AppKit
import CoreGraphics
import Foundation

guard CommandLine.arguments.count >= 3 else {
  fputs("Usage: swift remove-white-background.swift input.png output.png\n", stderr)
  exit(1)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard
  let image = NSImage(contentsOf: inputURL),
  let source = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
  fputs("Could not load input image.\n", stderr)
  exit(1)
}

let width = source.width
let height = source.height
let bytesPerPixel = 4
let bytesPerRow = width * bytesPerPixel
var pixels = [UInt8](repeating: 0, count: height * bytesPerRow)

guard
  let context = CGContext(
    data: &pixels,
    width: width,
    height: height,
    bitsPerComponent: 8,
    bytesPerRow: bytesPerRow,
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
  )
else {
  fputs("Could not create bitmap context.\n", stderr)
  exit(1)
}

context.draw(source, in: CGRect(x: 0, y: 0, width: width, height: height))

for offset in stride(from: 0, to: pixels.count, by: bytesPerPixel) {
  let red = Int(pixels[offset])
  let green = Int(pixels[offset + 1])
  let blue = Int(pixels[offset + 2])
  let distanceFromWhite = (255 - red) + (255 - green) + (255 - blue)

  if distanceFromWhite < 54 {
    pixels[offset + 3] = 0
  } else if distanceFromWhite < 95 {
    pixels[offset + 3] = UInt8(min(255, max(0, (distanceFromWhite - 54) * 6)))
  }
}

guard let outputImage = context.makeImage() else {
  fputs("Could not create output image.\n", stderr)
  exit(1)
}

let bitmap = NSBitmapImageRep(cgImage: outputImage)
guard let png = bitmap.representation(using: .png, properties: [:]) else {
  fputs("Could not encode PNG.\n", stderr)
  exit(1)
}

try png.write(to: outputURL)

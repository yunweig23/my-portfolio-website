import AppKit
import CoreImage
import Vision

guard CommandLine.arguments.count == 3 else {
  fputs("Usage: swift make_foreground_cutout.swift input output\n", stderr)
  exit(2)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard let nsImage = NSImage(contentsOf: inputURL) else {
  fputs("Could not open image: \(inputURL.path)\n", stderr)
  exit(1)
}

var proposedRect = CGRect(origin: .zero, size: nsImage.size)
guard let cgImage = nsImage.cgImage(forProposedRect: &proposedRect, context: nil, hints: nil) else {
  fputs("Could not create CGImage\n", stderr)
  exit(1)
}

let request = VNGenerateForegroundInstanceMaskRequest()
let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
try handler.perform([request])

guard let observation = request.results?.first else {
  fputs("No foreground mask produced\n", stderr)
  exit(1)
}

let maskBuffer = try observation.generateScaledMaskForImage(
  forInstances: observation.allInstances,
  from: handler
)

let inputImage = CIImage(cgImage: cgImage)
let maskImage = CIImage(cvPixelBuffer: maskBuffer)
let transparent = CIImage(color: .clear).cropped(to: inputImage.extent)

guard let blend = CIFilter(name: "CIBlendWithMask") else {
  fputs("Could not create blend filter\n", stderr)
  exit(1)
}

blend.setValue(inputImage, forKey: kCIInputImageKey)
blend.setValue(transparent, forKey: kCIInputBackgroundImageKey)
blend.setValue(maskImage, forKey: kCIInputMaskImageKey)

guard let outputImage = blend.outputImage else {
  fputs("Could not blend image and mask\n", stderr)
  exit(1)
}

let context = CIContext()
let colorSpace = CGColorSpaceCreateDeviceRGB()
try context.writePNGRepresentation(
  of: outputImage,
  to: outputURL,
  format: .RGBA8,
  colorSpace: colorSpace
)

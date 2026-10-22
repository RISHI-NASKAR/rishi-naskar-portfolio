from PIL import Image
import numpy as np

path = "/home/daytona/codebase/portrait-preview.png"
im = Image.open(path)
a = np.asarray(im)
alpha = a[..., 3].astype(np.float32) / 255.0
print("size", im.size, "mode", im.mode)
print("transparent px %:", round(float((alpha < 0.05).mean()) * 100, 1))
print("opaque px %:", round(float((alpha > 0.95).mean()) * 100, 1))
print("top row mean alpha:", round(float(alpha[0].mean()), 3))

haze = (alpha > 0.05) & (alpha < 0.5)
rgb = a[..., :3].astype(np.float32)
print("haze px %:", round(float(haze.mean()) * 100, 2))
if haze.sum():
    print("haze mean colour:", rgb[haze].mean(0).round(1))

# flatten onto the site colour so the result can be eyeballed
flat = np.zeros_like(rgb)
flat[..., 0] = 8
flat[..., 1] = 8
flat[..., 2] = 8
comp = (rgb * alpha[..., None] + flat * (1 - alpha[..., None])).astype(np.uint8)
Image.fromarray(comp).save(path)
print("preview written on top of #080808")

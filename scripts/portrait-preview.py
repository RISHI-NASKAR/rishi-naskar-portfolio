from PIL import Image
import numpy as np

src = "/home/daytona/codebase/portrait-preview.png"
im = Image.open(src).convert("RGBA")
im.thumbnail((640, 640), Image.LANCZOS)
a = np.asarray(im).astype(np.float32)
alpha = a[..., 3:4] / 255.0
flat = np.zeros_like(a[..., :3])
flat[..., 0] = 8
flat[..., 1] = 8
flat[..., 2] = 8
comp = a[..., :3] * alpha + flat * (1 - alpha)
out = Image.fromarray(np.clip(comp, 0, 255).astype("uint8"), "RGB")
out.save("/home/daytona/codebase/portrait-check.jpg", quality=82)
print("small preview written", out.size)

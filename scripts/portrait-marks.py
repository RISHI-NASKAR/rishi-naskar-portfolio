from PIL import Image
import numpy as np
from scipy import ndimage

SRC = "/home/daytona/codebase/.portrait-source.png"
im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.float32)
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
sat = a.max(2) - a.min(2)

bg_score = np.clip((lum - 168) / 40.0, 0, 1) * np.clip((16 - sat) / 8.0, 0, 1)
cand = bg_score > 0.55
lbl, _ = ndimage.label(cand)
ids = set(np.unique(np.concatenate([lbl[0, :], lbl[-1, :], lbl[:, 0], lbl[:, -1]])))
ids.discard(0)
bg = np.isin(lbl, list(ids))
fg = ~bg
soft = ndimage.gaussian_filter(fg.astype(np.float32), 0.9)
core = ndimage.binary_erosion(fg, iterations=1)
final = np.where(core, 1.0, np.clip(0.35 + soft * 0.9, 0, 1) * 0.9)
final[bg] = 0.0

rgba = np.dstack([np.asarray(im), (final * 255).astype(np.uint8)])

# Head-and-shoulders square for the round header mark.
x0, x1, y0, y1 = 405, 1025, 10, 630
head = rgba[y0:y1, x0:x1]
head_img = Image.fromarray(head, "RGBA")
head_img.thumbnail((192, 192), Image.LANCZOS)
head_img.save("/home/daytona/codebase/public/portrait-thumb.webp", "WEBP", quality=88, method=6)
print("portrait-thumb.webp", head_img.size)

# A wider plate for the closing interlude, right-aligned.
plate = rgba[60:1200, 60:1200]
plate_img = Image.fromarray(plate, "RGBA")
plate_img.thumbnail((900, 900), Image.LANCZOS)
plate_img.save("/home/daytona/codebase/public/portrait-echo.webp", "WEBP", quality=80, method=6)
print("portrait-echo.webp", plate_img.size)

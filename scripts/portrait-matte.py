from PIL import Image
import numpy as np
from scipy import ndimage

SRC = "/home/daytona/codebase/.portrait-source.png"

im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.float32)
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
sat = a.max(2) - a.min(2)

# The checkerboard is bright and neutral; skin, collar and hair are warm or dark.
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

# ---------------- numeric verification ----------------
skin = (sat > 22) & (lum > 90) & (lum < 235)
print("skin pixels:", int(skin.sum()), "| opaque share: %.4f" % float((final[skin] > 0.9).mean()))

face = np.zeros_like(fg)
face[120:620, 620:950] = True
print("face box opaque share: %.4f" % float((final[face] > 0.9).mean()))

holes = final < 0.05
hlab, hn = ndimage.label(holes)
border_ids = set(np.unique(np.concatenate([hlab[0, :], hlab[-1, :], hlab[:, 0], hlab[:, -1]])))
border_ids.discard(0)
inside = np.isin(hlab, list(border_ids))
inside_count = int((~inside & holes).sum())
print("interior hole px:", inside_count, "(", round(inside_count / fg.sum() * 100, 3), "% of subject )")

edge = (final > 0.05) & (final < 0.9)
print("edge px:", int(edge.sum()), "| mean colour:", a[edge].mean(0).round(1) if edge.sum() else "-")
print("subject fraction: %.3f" % float(fg.mean()))

# ---------------- output assets ----------------
ys, xs = np.where(final > 0.15)
y0, y1 = max(0, ys.min() - 8), min(a.shape[0], ys.max() + 8)
x0, x1 = max(0, xs.min() - 8), min(a.shape[1], xs.max() + 8)
rgba = np.dstack([np.asarray(im), (final * 255).astype(np.uint8)])[y0:y1, x0:x1]
cut = Image.fromarray(rgba, "RGBA")

big = cut.copy()
big.thumbnail((1100, 1100), Image.LANCZOS)
big.save("/home/daytona/codebase/public/portrait.webp", "WEBP", quality=84, method=6)
print("portrait.webp", big.size)

small = cut.copy()
small.thumbnail((900, 900), Image.LANCZOS)
small.save("/home/daytona/codebase/public/portrait.png", optimize=True)
print("portrait.png", small.size)

hdr = cut.copy()
hdr.thumbnail((96, 96), Image.LANCZOS)
hdr.save("/home/daytona/codebase/public/portrait-thumb.webp", "WEBP", quality=88, method=6)
print("portrait-thumb.webp", hdr.size)

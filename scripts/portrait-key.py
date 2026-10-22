from PIL import Image
import numpy as np
from scipy import ndimage

src = "/home/daytona/codebase/.portrait-source.png"
im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(np.float32)
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
sat = a.max(2) - a.min(2)

bg_score = np.clip((lum - 168) / 40.0, 0, 1) * np.clip((16 - sat) / 8.0, 0, 1)
cand = bg_score > 0.55
lbl, _ = ndimage.label(cand)
ids = set(np.unique(np.concatenate([lbl[0, :], lbl[-1, :], lbl[:, 0], lbl[:, -1]])))
ids.discard(0)
bg = np.isin(lbl, list(ids))

alpha = np.where(bg, 0.0, 1.0)
print("alpha unique:", np.unique(alpha)[:5], "fg fraction:", round(float((~bg).mean()), 3))

soft = ndimage.gaussian_filter(alpha, 0.9)
fg = ~bg
print("soft inside fg: min %.3f mean %.3f" % (soft[fg].min(), soft[fg].mean()))

eroded = ndimage.binary_erosion(bg, iterations=2)
final = np.where(fg, np.clip(0.35 + soft * 0.9, 0, 1), 0.0)
final[eroded] = 0.0
print("final percentiles:", [round(float(np.percentile(final, p)), 3) for p in (5, 25, 50, 75, 95, 99)])

# tighten: keep only solid interior opaque, feather 1px on the way out
core = ndimage.binary_erosion(fg, iterations=1)
final = np.where(core, 1.0, final * 0.9)
print("opaque fraction now:", round(float((final > 0.95).mean()), 3))

ys, xs = np.where(final > 0.15)
y0, y1 = max(0, ys.min() - 10), min(a.shape[0], ys.max() + 10)
x0, x1 = max(0, xs.min() - 10), min(a.shape[1], xs.max() + 10)
print("bbox", (x0, y0, x1, y1))

rgba = np.dstack([np.asarray(im), (final * 255).astype(np.uint8)])[y0:y1, x0:x1]
out = Image.fromarray(rgba, "RGBA")
out.thumbnail((1100, 1100), Image.LANCZOS)
out.save("/home/daytona/codebase/portrait-preview.png", optimize=True)
print("saved", out.size)

chk = np.asarray(out)
al = chk[..., 3] / 255.0
print("check transparent %:", round(float((al < 0.05).mean()) * 100, 1), "| opaque %:", round(float((al > 0.95).mean()) * 100, 1))

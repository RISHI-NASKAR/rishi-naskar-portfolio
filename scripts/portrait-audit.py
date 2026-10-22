from PIL import Image
import numpy as np
from scipy import ndimage


def stats(path):
    im = Image.open(path).convert("RGBA")
    a = np.asarray(im).astype(np.float32)
    h, w = a.shape[:2]
    rgb, alpha = a[..., :3], a[..., 3] / 255.0
    lum = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]
    sat = rgb.max(2) - rgb.min(2)
    bright = (lum > 150) & (sat < 28) & (alpha > 0.4)
    dark = (lum < 40) | (alpha < 0.5)
    dark_dil = ndimage.binary_dilation(dark, iterations=14)
    adj = (bright & dark_dil).sum() / max(bright.sum(), 1)
    print(f"{path}: bright-neutral {int(bright.sum())} px ({round(float(bright.mean())*100,2)}%), near-black-adjacent share {round(float(adj)*100,1)}%")
    return a, alpha


for p in ["public/portrait-new.webp", "public/portrait.webp", "public/portrait.png"]:
    stats(p)

# identity check: subject warm pixels unchanged after cleaning
new = np.asarray(Image.open("public/portrait-new.webp").convert("RGB")).astype(np.float32)
old = np.asarray(Image.open(".backup-portrait-new.webp").convert("RGB")).astype(np.float32)
diff = np.abs(new - old).sum(2)
changed = diff > 10
lum = 0.2126 * old[..., 0] + 0.7152 * old[..., 1] + 0.0722 * old[..., 2]
sat = old.max(2) - old.min(2)
warm = (sat > 22) & (lum > 90) & (lum < 235)
print("changed px:", int(changed.sum()), f"({round(float(changed.mean())*100,2)}%)")
print("warm/skin px touched:", int((changed & warm).sum()), f"({round(float((changed & warm).sum() / warm.sum() * 100),2)}% of skin)")
ys, xs = np.where(changed)
if len(ys):
    print("changed region bbox:", xs.min(), ys.min(), xs.max(), ys.max())

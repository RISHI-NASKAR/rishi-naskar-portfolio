from PIL import Image
import numpy as np
from scipy import ndimage

SRC = "/home/daytona/codebase/.portrait-source.png"
im = Image.open(SRC).convert("RGB")
a = np.asarray(im).astype(np.float32)
lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
sat = a.max(2) - a.min(2)

skin = (sat > 22) & (lum > 90) & (lum < 235)
lab, n = ndimage.label(skin)
sizes = ndimage.sum(skin, lab, range(1, n + 1))
biggest = int(np.argmax(sizes)) + 1
ys, xs = np.where(lab == biggest)
print("largest warm region px:", int(sizes.max()))
print("bbox x:", xs.min(), xs.max(), "| y:", ys.min(), ys.max())
cy, cx = ys.mean(), xs.mean()
print("centroid:", round(cx, 1), round(cy, 1))

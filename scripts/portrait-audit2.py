from PIL import Image
import numpy as np
from scipy import ndimage

def audit(path):
    im = Image.open(path).convert("RGBA")
    arr = np.asarray(im).astype(np.float32)
    rgb, alpha = arr[..., :3], arr[..., 3] / 255.0
    h, w = alpha.shape
    lum = 0.2126*rgb[...,0]+0.7152*rgb[...,1]+0.0722*rgb[...,2]
    sat = rgb.max(2)-rgb.min(2)
    bright = (lum>150)&(sat<28)&(alpha>0.4)
    op = alpha > 0.5
    ys, xs = np.where(op)
    er = ndimage.binary_erosion(op, iterations=1)
    edge = int((op & ~er).sum())
    # composite on site background #080808 for edge blend check
    flat = np.zeros_like(rgb); flat[...,0]=8; flat[...,1]=8; flat[...,2]=8
    comp = rgb*alpha[...,None] + flat*(1-alpha[...,None])
    cl = 0.2126*comp[...,0]+0.7152*comp[...,1]+0.0722*comp[...,2]
    cs = comp.max(2)-comp.min(2)
    stray = (cl>140)&(cs<20)&(alpha<0.6)
    print(f"{path}: {w}x{h}")
    print(f"   artifacts: {int(bright.sum())} px ({round(float(bright.mean())*100,2)}%) | stray bright-on-black after compositing: {int(stray.sum())} px")
    print(f"   subject y[{ys.min()}-{ys.max()}] x[{xs.min()}-{xs.max()}] centroid ({round(float(xs.mean()))},{round(float(ys.mean()))}) edge px {edge} ({round(edge/max(int(op.sum()),1)*100,1)}%)")
    top_row = int((op[0]).sum())
    print(f"   top-row opaque px: {top_row} (cropped at crown if > 40)")

for p in [".backup-portrait-thumb.webp", "public/portrait-thumb.webp",
          ".backup-portrait-echo.webp", "public/portrait-echo.webp"]:
    audit(p)

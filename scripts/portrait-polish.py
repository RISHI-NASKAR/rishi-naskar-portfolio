from PIL import Image
import numpy as np
from scipy import ndimage


def polish(path, min_size=3):
    im = Image.open(path).convert("RGBA")
    a = np.asarray(im).astype(np.float32)
    rgb, alpha = a[..., :3].copy(), a[..., 3] / 255.0
    total = 0
    for _ in range(4):
        lum = 0.2126*rgb[...,0]+0.7152*rgb[...,1]+0.0722*rgb[...,2]
        sat = rgb.max(2)-rgb.min(2)
        bright = (lum>140)&(sat<28)&(alpha>0.4)
        dark = (lum<40)|(alpha<0.5)
        dark_dil = ndimage.binary_dilation(dark, iterations=6)
        lbl, n = ndimage.label(bright)
        removed = np.zeros_like(bright)
        if n:
            sizes = ndimage.sum(bright, lbl, range(1, n+1))
            for cid in range(1, n+1):
                px = lbl == cid
                size = int(sizes[cid-1])
                adj = float((dark_dil & px).sum()) / size
                if size >= min_size and adj >= 0.30:
                    removed |= px
        if removed.sum() < 5:
            break
        total += int(removed.sum())
        alpha[removed] = 0.0
    out = Image.fromarray(np.clip(np.dstack([rgb, alpha*255]), 0, 255).astype(np.uint8), "RGBA")
    if path.endswith(".webp"):
        out.save(path, "WEBP", quality=88, method=6)
    else:
        out.save(path, optimize=True)
    print(f"{path}: polished {total} px")
    # re-audit
    arr = np.asarray(Image.open(path).convert("RGBA")).astype(np.float32)
    lm = 0.2126*arr[...,0]+0.7152*arr[...,1]+0.0722*arr[...,2]
    st = arr.max(2)-arr.min(2)
    al = arr[...,3]/255.0
    br = (lm>150)&(st<28)&(al>0.4)
    print(f"   remaining artifacts: {int(br.sum())} px ({round(float(br.mean())*100,3)}%)")


polish("public/portrait-thumb.webp")
polish("public/portrait-echo.webp")

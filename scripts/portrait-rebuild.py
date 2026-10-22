from PIL import Image
import numpy as np
from scipy import ndimage

INK = np.array([8.0, 8.0, 8.0])


def clean_alpha_inplace(rgb, alpha, min_size=6):
    """Remove checker remnants: bright-neutral opaque px adjacent to transparent/black."""
    total = 0
    for _ in range(3):
        lum = 0.2126*rgb[...,0]+0.7152*rgb[...,1]+0.0722*rgb[...,2]
        sat = rgb.max(2)-rgb.min(2)
        bright = (lum>150)&(sat<28)&(alpha>0.4)
        dark = (lum<40)|(alpha<0.5)
        dark_dil = ndimage.binary_dilation(dark, iterations=8)
        lbl, n = ndimage.label(bright)
        removed = np.zeros_like(bright)
        if n:
            sizes = ndimage.sum(bright, lbl, range(1, n+1))
            for cid in range(1, n+1):
                px = lbl == cid
                size = int(sizes[cid-1])
                adj = float((dark_dil & px).sum()) / size
                if size >= min_size and adj >= 0.35:
                    removed |= px
        if removed.sum() < 20:
            break
        total += int(removed.sum())
        alpha[removed] = 0.0
    return total


src = Image.open("public/portrait.webp").convert("RGBA")
a = np.asarray(src).astype(np.float32)
h, w = a.shape[:2]
alpha = a[..., 3] / 255.0
rgb = a[..., :3]
lum = 0.2126*rgb[...,0]+0.7152*rgb[...,1]+0.0722*rgb[...,2]
sat = rgb.max(2)-rgb.min(2)

skin = (sat > 35) & (lum > 100) & (lum < 235) & (alpha > 0.5)
lbl, n = ndimage.label(ndimage.binary_closing(skin, iterations=4))
sizes = ndimage.sum(skin, lbl, range(1, n + 1))
best = None
for cid in np.argsort(sizes)[::-1]:
    ys, xs = np.where(lbl == int(cid) + 1)
    if ys.mean() < h * 0.55:
        best = (ys, xs)
        break
face_cx = int(best[1].mean())
head_cx = int(round((face_cx + 573) / 2))  # blend of warm-cluster centroid and width-profile centroid
print("face warm centroid x:", face_cx, "-> head crop centre x:", head_cx)

# --- header thumb: 620-side square from the crown, like the original key crop ---
side = 620
x0 = max(0, min(w - side, head_cx - side // 2))
y0 = 0
crop = src.crop((x0, y0, x0 + side, y0 + side)).resize((192, 192), Image.LANCZOS)
crgb = np.asarray(crop).astype(np.float32)
crgb = crgb[..., :3].copy()
calpha = (np.asarray(crop)[..., 3] / 255.0).copy()
clean_alpha_inplace(crgb, calpha)
crop = Image.fromarray(np.clip(np.dstack([crgb, calpha*255]), 0, 255).astype(np.uint8), "RGBA")
canvas = Image.new("RGBA", (192, 192), (0, 0, 0, 0))
canvas.paste(crop, (0, 0))
canvas.save("public/portrait-thumb.webp", "WEBP", quality=90, method=6)
print("portrait-thumb.webp rebuilt, crop", (x0, y0, x0+side, y0+side))

# --- About echo plate: whole cleaned cutout, head intact ---
echo_src = Image.open("public/portrait.webp").convert("RGBA")
ea = np.asarray(echo_src).astype(np.float32)
ergb, ealpha = ea[...,:3].copy(), ea[...,3]/255.0
clean_alpha_inplace(ergb, ealpha, min_size=10)
echo = Image.fromarray(np.clip(np.dstack([ergb, ealpha*255]), 0, 255).astype(np.uint8), "RGBA")
echo.thumbnail((900, 900), Image.LANCZOS)
echo.save("public/portrait-echo.webp", "WEBP", quality=82, method=6)
print("portrait-echo.webp rebuilt:", echo.size)

def audit(path):
    im = Image.open(path).convert("RGBA")
    arr = np.asarray(im).astype(np.float32)
    lm = 0.2126*arr[...,0]+0.7152*arr[...,1]+0.0722*arr[...,2]
    st = arr.max(2)-arr.min(2)
    al = arr[...,3]/255.0
    br = (lm>150)&(st<28)&(al>0.4)
    op = al>0.5
    ys, xs2 = np.where(op)
    print(f"{path}: {im.size} artifacts {int(br.sum())} px ({round(float(br.mean())*100,2)}%) subject y[{ys.min()}-{ys.max()}] x[{xs2.min()}-{xs2.max()}] centroidX {round(float(xs2.mean()))}")

for p in ["public/portrait-thumb.webp", "public/portrait-echo.webp"]:
    audit(p)

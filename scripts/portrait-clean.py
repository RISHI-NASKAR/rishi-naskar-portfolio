from PIL import Image
import numpy as np
from scipy import ndimage

INK = np.array([8.0, 8.0, 8.0])


def detect(rgb, alpha, dark_radius=14):
    lum = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]
    sat = rgb.max(2) - rgb.min(2)
    bright = (lum > 150) & (sat < 28) & (alpha > 0.4)
    # "visually black": true black, or a transparent pixel compositing on black
    dark = (lum < 40) | (alpha < 0.5)
    dark_dil = ndimage.binary_dilation(dark, iterations=dark_radius)
    return lum, sat, bright, dark_dil


def artifact_mask(rgb, alpha):
    lum, sat, bright, dark_dil = detect(rgb, alpha)
    remove = np.zeros_like(bright)
    lbl, n = ndimage.label(bright)
    if n == 0:
        return remove, np.zeros_like(bright), lum
    sizes = ndimage.sum(bright, lbl, range(1, n + 1))
    for cid in range(1, n + 1):
        px = lbl == cid
        size = int(sizes[cid - 1])
        vals = lum[px]
        mean, std = float(vals.mean()), float(vals.std())
        adjacency = float((dark_dil & px).sum()) / size
        # checkerboard cells: uniform near-white fill or strongly bounded by black
        if size >= 40 and (adjacency >= 0.30 or (std < 12 and mean > 175)):
            remove |= px
        elif size >= 10 and adjacency >= 0.55:
            remove |= px  # slivers left at cell edges
    # partially keyed grey edges around the removed cells
    grey = (lum > 90) & (lum < 156) & (sat < 26) & (alpha > 0.2)
    halo = grey & ndimage.binary_dilation(remove, iterations=6)
    return remove, halo, lum


def clean_flat(path, out):
    a = np.asarray(Image.open(path).convert("RGB")).astype(np.float32)
    alpha = np.ones(a.shape[:2], dtype=np.float32)
    total = 0
    for _ in range(4):
        remove, halo, _ = artifact_mask(a, alpha)
        bad = remove | halo
        before = int(bad.sum())
        if before < 150:
            break
        total += before
        a[bad] = INK
    a[(a.max(2) - a.min(2) < 20) & (a[..., 0] > 150)] = INK  # neutral-white dust
    Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "RGB").save(out, "WEBP", quality=88, method=6)
    print(f"{path}: removed {total} px ({round(total / bad.size * 100, 2)}%) -> {out}")


def clean_alpha(path, out):
    im = Image.open(path).convert("RGBA")
    a = np.asarray(im).astype(np.float32)
    rgb, alpha = a[..., :3].copy(), a[..., 3] / 255.0
    total = 0
    for _ in range(4):
        remove, halo, _ = artifact_mask(rgb, alpha)
        bad = remove | halo
        before = int(bad.sum())
        if before < 150:
            break
        total += before
        alpha[bad] = 0.0
        # soften the cut: fade alpha over a 2px ring around the removed cells
        ring = ~bad & (alpha > 0) & ndimage.binary_dilation(bad, iterations=2)
        grey2 = np.abs(rgb.max(2) - rgb.min(2)) < 30
        alpha[ring & grey2] *= 0.35
    Image.fromarray(np.clip(np.dstack([rgb, (alpha * 255).astype(np.float32)]), 0, 255).astype(np.uint8), "RGBA").save(out, "WEBP", quality=84, method=6)
    print(f"{path}: cleared {total} px ({round(total / bad.size * 100, 2)}%) -> {out}")


clean_flat("public/portrait-new.webp", "public/portrait-new.webp")
clean_alpha("public/portrait.webp", "public/portrait.webp")
Image.open("public/portrait.webp").convert("RGBA").save("public/portrait.png", optimize=True)
print("public/portrait.png regenerated from cleaned portrait.webp")

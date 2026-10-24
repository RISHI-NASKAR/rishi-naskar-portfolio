"""Repair the portrait asset without touching the photograph itself.

The site's cutout (`public/portrait.webp`) was produced by luminance keying:
the silhouette is fragmented into 227 alpha islands, 134 tiny transparent holes
(the "black specks" over the nose, lips and glasses) and every edge carries a
bright white fringe left over from the light backdrop.

This script keeps the exact photograph, silhouette and composition. It only:
  1. removes stray alpha islands and pinhole holes,
  2. rebuilds a smooth, anti-aliased edge (no jagged stair-steps),
  3. removes the white backdrop fringe by un-mixing edge pixels,
  4. re-encodes at the source's native 1254 px instead of the 1100 px downscale,
  5. exports at high quality so nose/lip/glasses detail is not crushed again.

Nothing is generated, sharpened, reshaped or re-coloured.
"""

from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / ".portrait-source.png"
CUTOUT = ROOT / "public" / "portrait.webp"
OUT = ROOT / "public" / "portrait.webp"
ECHO = ROOT / "public" / "portrait-echo.webp"

SIZE = 1254          # native resolution of the uploaded photograph
MIN_ISLAND = 600     # alpha specks smaller than this are noise, not subject
MAX_PINHOLE = 400    # transparent pinholes smaller than this are keying errors
EDGE_SIGMA = 0.6     # sub-pixel feather for the silhouette


def clean_matte(alpha: np.ndarray) -> np.ndarray:
    """Remove specks, close pinholes, then rebuild a smooth anti-aliased edge."""
    solid = alpha > 0.5

    labels, count = ndimage.label(solid)
    if count:
        areas = ndimage.sum(solid, labels, range(1, count + 1))
        keep = np.isin(labels, np.where(areas >= MIN_ISLAND)[0] + 1)
        solid = keep

    holes = ndimage.binary_fill_holes(solid) & ~solid
    labels, count = ndimage.label(holes)
    if count:
        areas = ndimage.sum(holes, labels, range(1, count + 1))
        small = np.isin(labels, np.where(areas <= MAX_PINHOLE)[0] + 1)
        solid = solid | small

    # Close single-pixel notches left by the threshold, without blunting detail.
    solid = ndimage.binary_closing(solid, structure=np.ones((3, 3), bool), iterations=1)

    # Hard interior, soft 1-2 px boundary: no stair-stepped or jagged outline.
    core = ndimage.binary_erosion(solid, structure=np.ones((3, 3), bool), iterations=1)
    matte = ndimage.gaussian_filter(solid.astype(np.float32), EDGE_SIGMA)
    matte = np.clip((matte - 0.18) / 0.64, 0.0, 1.0)
    matte[core] = 1.0
    matte[~ndimage.binary_dilation(solid, iterations=1)] = 0.0

    # Filling above happens in binary space; the soft remap can leave a handful
    # of sub-100 px pinholes behind. Close those too — they are what read as
    # black specks on the cheek, lips and glasses.
    opaque = matte > 0.5
    residual = ndimage.binary_fill_holes(opaque) & ~opaque
    labels, count = ndimage.label(residual)
    if count:
        areas = ndimage.sum(residual, labels, range(1, count + 1))
        tiny = np.isin(labels, np.where(areas <= MAX_PINHOLE)[0] + 1)
        matte = np.maximum(matte, ndimage.gaussian_filter(tiny.astype(np.float32), EDGE_SIGMA))
        matte = np.clip(matte, 0.0, 1.0)
    return matte


def unmix_backdrop(rgb: np.ndarray, matte: np.ndarray) -> np.ndarray:
    """Remove the light background that bleeds into the semi-transparent edge.

    The backdrop colour is estimated locally from the pixels that are definitely
    transparent, so no artificial white rim or halo is baked into the export.
    """
    weight = 1.0 - matte
    denom = ndimage.gaussian_filter(weight, 6.0)
    backdrop = np.stack(
        [
            ndimage.gaussian_filter(rgb[..., c] * weight, 6.0) / np.maximum(denom, 1e-4)
            for c in range(3)
        ],
        axis=-1,
    )
    # Where there is no nearby background sample, fall back to the frame's white.
    backdrop = np.where(denom[..., None] > 1e-3, backdrop, 248.0)

    edge = (matte > 0.015) & (matte < 0.995)
    out = rgb.copy()
    safe = np.maximum(matte[edge], 0.12)[:, None]
    out[edge] = np.clip((rgb[edge] - (1.0 - matte[edge])[:, None] * backdrop[edge]) / safe, 0, 255)
    return out


def main() -> None:
    src = Image.open(SOURCE).convert("RGB")
    rgb = np.asarray(src, dtype=np.float32)

    old = Image.open(CUTOUT)
    alpha = old.getchannel("A").resize(src.size, Image.LANCZOS)
    matte = clean_matte(np.asarray(alpha, dtype=np.float32) / 255.0)

    colour = unmix_backdrop(rgb, matte)

    rgba = np.dstack([colour, matte * 255.0]).round().astype(np.uint8)
    master = Image.fromarray(rgba, "RGBA")
    master.save(OUT, "WEBP", quality=94, method=6)

    echo = master.resize((900, 890), Image.LANCZOS)
    echo.save(ECHO, "WEBP", quality=92, method=6)

    labels, count = ndimage.label(matte > 0.04)
    filled = ndimage.binary_fill_holes(matte > 0.5) & ~(matte > 0.5)
    holes, hole_count = ndimage.label(filled)
    print(
        f"islands={count} holes={hole_count} "
        f"coverage={(matte > 0.5).mean():.3f} "
        f"out={OUT.stat().st_size / 1024:.0f}KB echo={ECHO.stat().st_size / 1024:.0f}KB"
    )


if __name__ == "__main__":
    main()

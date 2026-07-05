#!/usr/bin/env python3
"""Generate favicon PNG/ICO assets from the shared design tokens."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

BG = (9, 9, 11, 255)
GREEN = (34, 197, 94, 255)
FONT_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Helvetica.ttc",
    "/Library/Fonts/Arial Bold.ttf",
]


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size=size)
            except OSError:
                continue
    return ImageFont.load_default()


def render_icon(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(image)

    inset = max(2, round(size * 0.09))
    border = max(1, round(size * 0.012))
    radius = max(2, round(size * 0.11))

    draw.rounded_rectangle(
        (inset, inset, size - inset - 1, size - inset - 1),
        radius=radius,
        outline=GREEN,
        width=border,
    )

    font_size = max(8, round(size * 0.34))
    font = load_font(font_size)
    text = "JT"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1] + size * 0.02
    draw.text((x, y), text, font=font, fill=GREEN)

    return image


def save_png(path: Path, size: int) -> None:
    render_icon(size).save(path, format="PNG", optimize=True)


def save_ico(path: Path, sizes: list[int]) -> None:
    images = [render_icon(size) for size in sizes]
    images[0].save(
        path,
        format="ICO",
        sizes=[(size, size) for size in sizes],
        append_images=images[1:],
    )


def main() -> None:
    targets = {
        PUBLIC / "favicon-16x16.png": 16,
        PUBLIC / "favicon-32x32.png": 32,
        PUBLIC / "apple-touch-icon.png": 180,
        PUBLIC / "android-chrome-192x192.png": 192,
        PUBLIC / "android-chrome-512x512.png": 512,
    }

    for path, size in targets.items():
        save_png(path, size)
        print(f"Wrote {path.relative_to(ROOT)} ({size}x{size})")

    save_ico(PUBLIC / "favicon.ico", [16, 32, 48])
    print(f"Wrote {PUBLIC.relative_to(ROOT) / 'favicon.ico'}")


if __name__ == "__main__":
    main()

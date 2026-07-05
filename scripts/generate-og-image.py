#!/usr/bin/env python3
"""Generate the portfolio Open Graph image from shared design tokens."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og-image.png"

WIDTH = 1200
HEIGHT = 630

BG = (9, 9, 11, 255)
FOREGROUND = (250, 250, 250, 255)
MUTED = (161, 161, 170, 255)
GREEN = (34, 197, 94, 255)
TEAL = (45, 212, 191, 255)
BORDER = (39, 39, 42, 255)

FONT_REGULAR_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/Library/Fonts/Arial.ttf",
]
FONT_BOLD_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
]

GREETING = "Hi, I'm"
NAME = "Julie"
TITLE = "Middle Frontend Engineer | React · Next.js · TypeScript"
SUMMARY = (
    "Middle Frontend Engineer — fintech interfaces by day, open-source side projects by night. "
    "I build banking and exchange frontends for outsourcing clients (under NDA) and ship "
    "full-stack products from climate tech and social impact to immigration tools — with a "
    "focus on TypeScript, polished UX, and real-world impact."
)


def load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in candidates:
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size=size)
            except OSError:
                continue
    return ImageFont.load_default()


def wrap_text(text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        candidate = f"{current} {word}".strip()
        bbox = font.getbbox(candidate)
        if bbox[2] - bbox[0] <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word

    if current:
        lines.append(current)

    return lines


def draw_gradient_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    xy: tuple[float, float],
    font: ImageFont.ImageFont,
    start_color: tuple[int, int, int, int],
    end_color: tuple[int, int, int, int],
) -> None:
    bbox = font.getbbox(text)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x, y = xy

    mask = Image.new("L", (text_w, text_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.text((-bbox[0], -bbox[1]), text, font=font, fill=255)

    gradient = Image.new("RGBA", (text_w, text_h), start_color)
    gradient_draw = ImageDraw.Draw(gradient)
    for col in range(text_w):
        ratio = col / max(text_w - 1, 1)
        color = tuple(
            int(start_color[i] + (end_color[i] - start_color[i]) * ratio) for i in range(3)
        ) + (255,)
        gradient_draw.line([(col, 0), (col, text_h)], fill=color)

    draw._image.paste(gradient, (int(x), int(y)), mask)


def draw_rounded_rect(
    draw: ImageDraw.ImageDraw,
    xy: tuple[float, float, float, float],
    radius: int,
    fill: tuple[int, int, int, int] | None = None,
    outline: tuple[int, int, int, int] | None = None,
    width: int = 1,
) -> None:
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def draw_button(
    draw: ImageDraw.ImageDraw,
    x: float,
    y: float,
    label: str,
    font: ImageFont.ImageFont,
    *,
    variant: str = "default",
) -> float:
    padding_x = 24
    padding_y = 14
    bbox = font.getbbox(label)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    btn_w = text_w + padding_x * 2
    btn_h = text_h + padding_y * 2

    if variant == "default":
        draw_rounded_rect(draw, (x, y, x + btn_w, y + btn_h), 12, fill=GREEN)
        text_color = FOREGROUND
    elif variant == "outline":
        draw_rounded_rect(draw, (x, y, x + btn_w, y + btn_h), 12, outline=BORDER, width=2)
        text_color = FOREGROUND
    else:
        text_color = FOREGROUND

    draw.text(
        (x + padding_x - bbox[0], y + padding_y - bbox[1]),
        label,
        font=font,
        fill=text_color,
    )
    return btn_w


def draw_glow(image: Image.Image) -> None:
    glow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((420, -180, 980, 260), fill=(34, 197, 94, 18))
    glow_draw.ellipse((760, 260, 1180, 620), fill=(16, 185, 129, 14))
    image.alpha_composite(glow)


def render() -> Image.Image:
    image = Image.new("RGBA", (WIDTH, HEIGHT), BG)
    draw_glow(image)
    draw = ImageDraw.Draw(image)

    font_greeting = load_font(FONT_REGULAR_CANDIDATES, 28)
    font_name = load_font(FONT_BOLD_CANDIDATES, 96)
    font_title = load_font(FONT_BOLD_CANDIDATES, 34)
    font_summary = load_font(FONT_REGULAR_CANDIDATES, 24)
    font_button = load_font(FONT_BOLD_CANDIDATES, 22)

    x = 80
    y = 72

    draw.text((x, y), GREETING, font=font_greeting, fill=MUTED)
    y += 44

    draw.text((x, y), NAME, font=font_name, fill=FOREGROUND)
    y += 108

    draw_gradient_text(draw, TITLE, (x, y), font_title, GREEN, TEAL)
    y += 56

    max_text_width = WIDTH - x * 2
    for line in wrap_text(SUMMARY, font_summary, max_text_width):
        draw.text((x, y), line, font=font_summary, fill=MUTED)
        y += 34

    y += 28
    btn_x = x
    btn_gap = 12
    btn_x += draw_button(draw, btn_x, y, "Explore My Work", font_button, variant="default") + btn_gap
    btn_x += draw_button(draw, btn_x, y, "Download CV", font_button, variant="outline") + btn_gap
    draw_button(draw, btn_x, y, "Get in Touch", font_button, variant="ghost")

    icon_y = HEIGHT - 72
    icon_size = 22
    draw.rounded_rectangle((x, icon_y, x + icon_size, icon_y + icon_size), radius=4, outline=MUTED, width=2)
    draw.text((x + 38, icon_y - 2), "in", font=font_button, fill=MUTED)

    return image.convert("RGB")


def main() -> None:
    image = render()
    image.save(OUTPUT, format="PNG", optimize=True)
    print(f"Wrote {OUTPUT.relative_to(ROOT)} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()

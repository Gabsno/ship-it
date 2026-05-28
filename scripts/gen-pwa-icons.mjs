// Tiny generator for the PWA install icons.
// Renders a green rounded-square (or full bleed for maskable) with a
// stylised white "S" pixel-art shape. No native deps — pure JS pngjs.
//
// Run: node scripts/gen-pwa-icons.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

const ACCENT = [0x10, 0xb9, 0x81]; // accent green
const INK = [0x0b, 0x0d, 0x10];    // near-black

function setPixel(png, x, y, [r, g, b], a = 255) {
  if (x < 0 || y < 0 || x >= png.width || y >= png.height) return;
  const idx = (y * png.width + x) << 2;
  png.data[idx] = r;
  png.data[idx + 1] = g;
  png.data[idx + 2] = b;
  png.data[idx + 3] = a;
}

function clearTransparent(png) {
  for (let i = 0; i < png.data.length; i += 4) png.data[i + 3] = 0;
}

function fillRoundedRect(png, color, radius) {
  const { width: w, height: h } = png;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Clipping by rounded corner
      const dx = Math.max(0, radius - x, x - (w - 1 - radius));
      const dy = Math.max(0, radius - y, y - (h - 1 - radius));
      if (dx * dx + dy * dy > radius * radius) continue;
      setPixel(png, x, y, color);
    }
  }
}

function drawS(png, color, options) {
  // Draws a stylised letter S as three horizontal bars connected by two short
  // vertical bars. Roughly the same visual weight as a 700-weight sans S.
  const {
    cx, cy, w, h, thickness,
  } = options;
  const left = cx - w / 2;
  const right = cx + w / 2;
  const top = cy - h / 2;
  const bottom = cy + h / 2;
  const middleY = cy;

  const fillRect = (x0, y0, x1, y1) => {
    for (let y = Math.round(y0); y < Math.round(y1); y++) {
      for (let x = Math.round(x0); x < Math.round(x1); x++) {
        setPixel(png, x, y, color);
      }
    }
  };

  // Top bar (full width)
  fillRect(left, top, right, top + thickness);
  // Left vertical (top→middle)
  fillRect(left, top, left + thickness, middleY + thickness / 2);
  // Middle bar (full width)
  fillRect(left, middleY - thickness / 2, right, middleY + thickness / 2);
  // Right vertical (middle→bottom)
  fillRect(right - thickness, middleY - thickness / 2, right, bottom);
  // Bottom bar (full width)
  fillRect(left, bottom - thickness, right, bottom);
}

function renderIcon(size, { maskable }) {
  const png = new PNG({ width: size, height: size });
  clearTransparent(png);

  const radius = maskable ? 0 : Math.round(size * 0.22);
  fillRoundedRect(png, ACCENT, maskable ? size : radius);
  if (maskable) {
    // For maskable, fill the entire square so OS-masked icons stay bleed.
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) setPixel(png, x, y, ACCENT);
  }

  // Letter S — sized smaller for maskable (safe zone), larger for any
  const padding = maskable ? size * 0.22 : size * 0.20;
  const sWidth = size - padding * 2;
  const sHeight = sWidth * 1.05; // slightly taller than wide
  const thickness = Math.max(2, Math.round(sWidth * 0.18));
  drawS(png, INK, {
    cx: size / 2,
    cy: size / 2,
    w: sWidth,
    h: sHeight,
    thickness,
  });

  return PNG.sync.write(png);
}

mkdirSync('public', { recursive: true });

writeFileSync(path.join('public', 'icon-192.png'), renderIcon(192, { maskable: false }));
writeFileSync(path.join('public', 'icon-512.png'), renderIcon(512, { maskable: false }));
writeFileSync(path.join('public', 'maskable-icon-512.png'), renderIcon(512, { maskable: true }));
writeFileSync(path.join('public', 'apple-touch-icon-180.png'), renderIcon(180, { maskable: false }));

console.log('Generated PWA icons in public/');

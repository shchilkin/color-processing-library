import type { RGB, HSL, HSV } from './types';
import { clamp, toChannelHex, normaliseHex } from './utils';

export function hexToRgb(hex: string): RGB {
  const h = normaliseHex(hex);
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + toChannelHex(r) + toChannelHex(g) + toChannelHex(b);
}

export function rgbToHsl(r: number, g: number, b: number): HSL {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  switch (max) {
    case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
    case gn: h = (bn - rn) / d + 2; break;
    default:  h = (rn - gn) / d + 4; break;
  }
  h = h / 6;
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToRgb(h: number, s: number, l: number): RGB {
  const sn = s / 100, ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const hn = h / 60;
  const x = c * (1 - Math.abs(hn % 2 - 1));
  let r = 0, g = 0, b = 0;
  if (hn < 1)      { r = c; g = x; b = 0; }
  else if (hn < 2) { r = x; g = c; b = 0; }
  else if (hn < 3) { r = 0; g = c; b = x; }
  else if (hn < 4) { r = 0; g = x; b = c; }
  else if (hn < 5) { r = x; g = 0; b = c; }
  else             { r = c; g = 0; b = x; }
  const m = ln - c / 2;
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

export function rgbToHsv(r: number, g: number, b: number): HSV {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  let h = 0;
  if (max !== min) {
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break;
      case gn: h = (bn - rn) / d + 2; break;
      default:  h = (rn - gn) / d + 4; break;
    }
    h = h / 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
}

export function hsvToRgb(h: number, s: number, v: number): RGB {
  const sn = s / 100, vn = v / 100;
  const i = Math.floor(h / 60) % 6;
  const f = h / 60 - Math.floor(h / 60);
  const p = vn * (1 - sn);
  const q = vn * (1 - f * sn);
  const t = vn * (1 - (1 - f) * sn);
  let r = 0, g = 0, b = 0;
  switch (i) {
    case 0: r = vn; g = t;  b = p;  break;
    case 1: r = q;  g = vn; b = p;  break;
    case 2: r = p;  g = vn; b = t;  break;
    case 3: r = p;  g = q;  b = vn; break;
    case 4: r = t;  g = p;  b = vn; break;
    default: r = vn; g = p; b = q;  break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

export function hexToHsl(hex: string): HSL {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHsl(r, g, b);
}

export function hslToHex(h: number, s: number, l: number): string {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

import { hexToHsl, hslToHex, hexToRgb, rgbToHex } from './conversions';
import { clamp } from './utils';

export function lighten(hex: string, amount: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, clamp(l + amount, 0, 100));
}

export function darken(hex: string, amount: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, clamp(l - amount, 0, 100));
}

export function saturate(hex: string, amount: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, clamp(s + amount, 0, 100), l);
}

export function desaturate(hex: string, amount: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, clamp(s - amount, 0, 100), l);
}

export function mix(hex1: string, hex2: string, weight = 50): string {
  const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
  const w = clamp(weight, 0, 100) / 100;
  return rgbToHex(
    Math.round(clamp(c1.r * w + c2.r * (1 - w), 0, 255)),
    Math.round(clamp(c1.g * w + c2.g * (1 - w), 0, 255)),
    Math.round(clamp(c1.b * w + c2.b * (1 - w), 0, 255)),
  );
}

export function invert(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}

export function getTintsAndShades(hex: string, steps = 10): string[] {
  const { h, s } = hexToHsl(hex);
  if (steps <= 1) {
    return [hslToHex(h, s, 50)];
  }
  const result: string[] = [];
  for (let i = 0; i < steps; i++) {
    const l = 10 + (80 / (steps - 1)) * i;
    result.push(hslToHex(h, s, l));
  }
  return result;
}

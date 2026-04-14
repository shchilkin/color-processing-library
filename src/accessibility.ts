import { hexToRgb } from './conversions';

export function getRelativeLuminance(r: number, g: number, b: number): number {
  const linearise = (c: number) => {
    const sRGB = c / 255;
    return sRGB <= 0.04045 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b);
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const { r: r1, g: g1, b: b1 } = hexToRgb(hex1);
  const { r: r2, g: g2, b: b2 } = hexToRgb(hex2);
  const l1 = getRelativeLuminance(r1, g1, b1);
  const l2 = getRelativeLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export function getReadableTextColor(hex: string, dark = '#000000', light = '#FFFFFF'): string {
  const { r, g, b } = hexToRgb(hex);
  return getReadableTextColorFromRGB(r, g, b, dark, light);
}

export function getReadableTextColorFromRGB(r: number, g: number, b: number, dark = '#000000', light = '#FFFFFF'): string {
  const luminance = getRelativeLuminance(r, g, b);
  return luminance > 0.179 ? dark : light;
}

export function meetsWcagAA(hex1: string, hex2: string, largeText = false): boolean {
  const ratio = getContrastRatio(hex1, hex2);
  return largeText ? ratio >= 3.0 : ratio >= 4.5;
}

export function meetsWcagAAA(hex1: string, hex2: string, largeText = false): boolean {
  const ratio = getContrastRatio(hex1, hex2);
  return largeText ? ratio >= 4.5 : ratio >= 7.0;
}

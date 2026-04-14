export function isValidHex(hex: unknown): boolean {
  if (typeof hex !== 'string') return false;
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}

export function isValidRGB(r: number, g: number, b: number): boolean {
  const isValid = (n: number) => Number.isInteger(n) && n >= 0 && n <= 255;
  return isValid(r) && isValid(g) && isValid(b);
}

export function isValidHSL(h: number, s: number, l: number): boolean {
  return h >= 0 && h < 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

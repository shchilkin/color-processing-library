export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function toChannelHex(n: number): string {
  return Math.round(clamp(n, 0, 255)).toString(16).toUpperCase().padStart(2, '0');
}

export function normaliseHex(hex: string): string {
  if (typeof hex !== 'string') throw new TypeError(`Invalid hex color: ${hex}`);
  let h = hex.trim();
  if (h.startsWith('#')) h = h.slice(1);
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  if (!/^[0-9A-Fa-f]{6}$/.test(h)) throw new TypeError(`Invalid hex color: ${hex}`);
  return h.toUpperCase();
}

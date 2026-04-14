import type { RGB } from './types';
import { toChannelHex } from './utils';

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomRGB(): RGB {
  return { r: randomInt(0, 255), g: randomInt(0, 255), b: randomInt(0, 255) };
}

export function randomHex(): string {
  const { r, g, b } = randomRGB();
  return '#' + toChannelHex(r) + toChannelHex(g) + toChannelHex(b);
}

import { describe, it, expect } from 'vitest';
import { randomHex, randomRGB, randomInt } from '../random';

describe('randomHex', () => {
  it('returns a valid hex string', () => {
    const hex = randomHex();
    expect(hex).toMatch(/^#[0-9A-F]{6}$/);
  });
  it('returns different values', () => {
    const results = new Set(Array.from({ length: 20 }, randomHex));
    expect(results.size).toBeGreaterThan(1);
  });
});

describe('randomRGB', () => {
  it('returns an object with r, g, b in [0, 255]', () => {
    const { r, g, b } = randomRGB();
    expect(r).toBeGreaterThanOrEqual(0);
    expect(r).toBeLessThanOrEqual(255);
    expect(g).toBeGreaterThanOrEqual(0);
    expect(g).toBeLessThanOrEqual(255);
    expect(b).toBeGreaterThanOrEqual(0);
    expect(b).toBeLessThanOrEqual(255);
  });
});

describe('randomInt', () => {
  it('returns integer in range [min, max]', () => {
    for (let i = 0; i < 100; i++) {
      const n = randomInt(5, 10);
      expect(n).toBeGreaterThanOrEqual(5);
      expect(n).toBeLessThanOrEqual(10);
      expect(Number.isInteger(n)).toBe(true);
    }
  });
});

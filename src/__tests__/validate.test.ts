import { describe, it, expect } from 'vitest';
import { isValidHex, isValidRGB, isValidHSL } from '../validate';

describe('isValidHex', () => {
  it('accepts 6-char hex with #', () => expect(isValidHex('#AABBCC')).toBe(true));
  it('accepts 6-char hex without #', () => expect(isValidHex('AABBCC')).toBe(true));
  it('accepts 3-char hex with #', () => expect(isValidHex('#FFF')).toBe(true));
  it('accepts 3-char hex without #', () => expect(isValidHex('FFF')).toBe(true));
  it('rejects 8-char hex (regression)', () => expect(isValidHex('#ABCDEFAB')).toBe(false));
  it('rejects non-string', () => expect(isValidHex(undefined as unknown as string)).toBe(false));
  it('rejects invalid characters', () => expect(isValidHex('#GGGGGG')).toBe(false));
  it('rejects empty string', () => expect(isValidHex('')).toBe(false));
  it('rejects 5-char hex', () => expect(isValidHex('#ABCDE')).toBe(false));
  it('accepts lowercase hex', () => expect(isValidHex('#aabbcc')).toBe(true));
});

describe('isValidRGB', () => {
  it('accepts valid RGB', () => expect(isValidRGB(0, 128, 255)).toBe(true));
  it('rejects negative values', () => expect(isValidRGB(-1, 0, 0)).toBe(false));
  it('rejects values > 255', () => expect(isValidRGB(256, 0, 0)).toBe(false));
  it('rejects floats', () => expect(isValidRGB(1.5, 0, 0)).toBe(false));
  it('accepts boundary values', () => expect(isValidRGB(0, 0, 0)).toBe(true));
  it('accepts max boundary', () => expect(isValidRGB(255, 255, 255)).toBe(true));
});

describe('isValidHSL', () => {
  it('accepts valid HSL', () => expect(isValidHSL(180, 50, 50)).toBe(true));
  it('rejects h >= 360', () => expect(isValidHSL(360, 50, 50)).toBe(false));
  it('accepts h = 0', () => expect(isValidHSL(0, 0, 0)).toBe(true));
  it('rejects negative h', () => expect(isValidHSL(-1, 50, 50)).toBe(false));
  it('rejects s > 100', () => expect(isValidHSL(0, 101, 50)).toBe(false));
  it('rejects l > 100', () => expect(isValidHSL(0, 50, 101)).toBe(false));
  it('accepts s=100 l=100', () => expect(isValidHSL(359, 100, 100)).toBe(true));
});

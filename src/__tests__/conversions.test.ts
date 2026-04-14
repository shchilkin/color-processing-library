import { describe, it, expect } from 'vitest';
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, hexToHsl, hslToHex } from '../conversions';

describe('hexToRgb', () => {
  it('converts #FFFFFF', () => expect(hexToRgb('#FFFFFF')).toEqual({ r: 255, g: 255, b: 255 }));
  it('converts #000000', () => expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts shorthand #FFF', () => expect(hexToRgb('#FFF')).toEqual({ r: 255, g: 255, b: 255 }));
  it('converts shorthand #000', () => expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts #FF0000', () => expect(hexToRgb('#FF0000')).toEqual({ r: 255, g: 0, b: 0 }));
  it('throws for invalid hex', () => expect(() => hexToRgb('#GGGGGG')).toThrow(TypeError));
});

describe('rgbToHex', () => {
  it('converts 0,0,0', () => expect(rgbToHex(0, 0, 0)).toBe('#000000'));
  it('converts 255,255,255', () => expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF'));
  it('converts 255,0,0', () => expect(rgbToHex(255, 0, 0)).toBe('#FF0000'));
  it('clamps values above 255', () => expect(rgbToHex(300, 0, 0)).toBe('#FF0000'));
  it('clamps values below 0', () => expect(rgbToHex(-10, 0, 0)).toBe('#000000'));
});

describe('rgbToHsl', () => {
  it('converts black', () => expect(rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 }));
  it('converts white', () => expect(rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 }));
  it('converts red', () => expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 }));
  it('converts green', () => { const hsl = rgbToHsl(0, 255, 0); expect(hsl.h).toBe(120); });
  it('converts blue', () => { const hsl = rgbToHsl(0, 0, 255); expect(hsl.h).toBe(240); });
});

describe('hslToRgb', () => {
  it('converts h=0 s=100 l=50 (red)', () => expect(hslToRgb(0, 100, 50)).toEqual({ r: 255, g: 0, b: 0 }));
  it('converts h=0 s=0 l=0 (black)', () => expect(hslToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts h=0 s=0 l=100 (white)', () => expect(hslToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 }));
  it('converts h=120 s=100 l=50 (green)', () => expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 }));
  it('converts h=240 s=100 l=50 (blue)', () => expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 }));
});

describe('rgbToHsv', () => {
  it('converts black', () => expect(rgbToHsv(0, 0, 0)).toEqual({ h: 0, s: 0, v: 0 }));
  it('converts white', () => expect(rgbToHsv(255, 255, 255)).toEqual({ h: 0, s: 0, v: 100 }));
  it('converts red', () => expect(rgbToHsv(255, 0, 0)).toEqual({ h: 0, s: 100, v: 100 }));
});

describe('hsvToRgb', () => {
  it('converts h=0 s=100 v=100 (red)', () => expect(hsvToRgb(0, 100, 100)).toEqual({ r: 255, g: 0, b: 0 }));
  it('converts h=0 s=0 v=0 (black)', () => expect(hsvToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 }));
  it('converts h=0 s=0 v=100 (white)', () => expect(hsvToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 }));
});

describe('hexToHsl', () => {
  it('converts #FF0000 to red HSL', () => expect(hexToHsl('#FF0000')).toEqual({ h: 0, s: 100, l: 50 }));
  it('converts #000000 to black HSL', () => expect(hexToHsl('#000000')).toEqual({ h: 0, s: 0, l: 0 }));
});

describe('hslToHex', () => {
  it('converts h=0 s=100 l=50 to #FF0000', () => expect(hslToHex(0, 100, 50)).toBe('#FF0000'));
  it('converts h=0 s=0 l=0 to #000000', () => expect(hslToHex(0, 0, 0)).toBe('#000000'));
});

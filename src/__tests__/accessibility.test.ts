import { describe, it, expect } from 'vitest';
import { getRelativeLuminance, getContrastRatio, getReadableTextColor, getReadableTextColorFromRGB, meetsWcagAA, meetsWcagAAA } from '../accessibility';

describe('getRelativeLuminance', () => {
  it('black has luminance 0', () => expect(getRelativeLuminance(0, 0, 0)).toBe(0));
  it('white has luminance 1', () => expect(getRelativeLuminance(255, 255, 255)).toBeCloseTo(1, 5));
});

describe('getContrastRatio', () => {
  it('black vs white is 21', () => expect(getContrastRatio('#000000', '#FFFFFF')).toBe(21));
  it('white vs black is 21', () => expect(getContrastRatio('#FFFFFF', '#000000')).toBe(21));
  it('same color is 1', () => expect(getContrastRatio('#000000', '#000000')).toBe(1));
});

describe('getReadableTextColor', () => {
  it('returns dark text on light bg', () => expect(getReadableTextColor('#FFFFFF')).toBe('#000000'));
  it('returns light text on dark bg', () => expect(getReadableTextColor('#000000')).toBe('#FFFFFF'));
  it('uses custom dark color', () => expect(getReadableTextColor('#FFFFFF', '#333333')).toBe('#333333'));
  it('uses custom light color', () => expect(getReadableTextColor('#000000', '#000000', '#EEEEEE')).toBe('#EEEEEE'));
});

describe('getReadableTextColorFromRGB', () => {
  it('returns dark text on light background', () => expect(getReadableTextColorFromRGB(255, 255, 255)).toBe('#000000'));
  it('returns light text on dark background', () => expect(getReadableTextColorFromRGB(0, 0, 0)).toBe('#FFFFFF'));
});

describe('meetsWcagAA', () => {
  it('black/white meets AA', () => expect(meetsWcagAA('#000000', '#FFFFFF')).toBe(true));
  it('black/white meets AA large', () => expect(meetsWcagAA('#000000', '#FFFFFF', true)).toBe(true));
  it('similar colors fail AA', () => expect(meetsWcagAA('#AAAAAA', '#BBBBBB')).toBe(false));
});

describe('meetsWcagAAA', () => {
  it('black/white meets AAA', () => expect(meetsWcagAAA('#000000', '#FFFFFF')).toBe(true));
  it('similar colors fail AAA', () => expect(meetsWcagAAA('#AAAAAA', '#BBBBBB')).toBe(false));
});

import { describe, it, expect } from 'vitest';
import { lighten, darken, saturate, desaturate, getTintsAndShades, mix, invert } from '../manipulation';
import { hexToHsl } from '../conversions';

describe('lighten', () => {
  it('lightens a color', () => {
    const result = lighten('#000000', 50);
    expect(result).toBe('#808080');
  });
  it('clamps to white', () => expect(lighten('#FFFFFF', 50)).toBe('#FFFFFF'));
});

describe('darken', () => {
  it('darkens a color', () => {
    const result = darken('#FFFFFF', 50);
    expect(result).toBe('#808080');
  });
  it('clamps to black', () => expect(darken('#000000', 50)).toBe('#000000'));
});

describe('saturate', () => {
  it('increases saturation', () => {
    const before = '#808080';
    const result = saturate(before, 50);
    expect(result).not.toBe(before);
  });
});

describe('desaturate', () => {
  it('decreases saturation to grey', () => {
    const result = desaturate('#FF0000', 100);
    const { s } = hexToHsl(result);
    expect(s).toBe(0);
  });
});

describe('mix', () => {
  it('mixes black and white 50/50', () => {
    const result = mix('#000000', '#FFFFFF', 50);
    expect(['#7F7F7F', '#808080']).toContain(result);
  });
  it('weight 100 returns first color', () => expect(mix('#FF0000', '#0000FF', 100)).toBe('#FF0000'));
  it('weight 0 returns second color', () => expect(mix('#FF0000', '#0000FF', 0)).toBe('#0000FF'));
});

describe('invert', () => {
  it('inverts red', () => expect(invert('#FF0000')).toBe('#00FFFF'));
  it('inverts black to white', () => expect(invert('#000000')).toBe('#FFFFFF'));
  it('inverts white to black', () => expect(invert('#FFFFFF')).toBe('#000000'));
});

describe('getTintsAndShades', () => {
  it('returns default 10 steps', () => expect(getTintsAndShades('#FF0000')).toHaveLength(10));
  it('returns custom steps', () => expect(getTintsAndShades('#FF0000', 5)).toHaveLength(5));
  it('returns hex strings', () => {
    const shades = getTintsAndShades('#FF0000');
    shades.forEach(s => expect(s).toMatch(/^#[0-9A-F]{6}$/));
  });
});

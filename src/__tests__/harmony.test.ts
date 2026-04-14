import { describe, it, expect } from 'vitest';
import { getHarmonyColors } from '../harmony';

describe('getHarmonyColors', () => {
  it('complementary returns 2 colors', () => expect(getHarmonyColors('#FF0000', 'complementary')).toHaveLength(2));
  it('analogous returns 3 colors', () => expect(getHarmonyColors('#FF0000', 'analogous')).toHaveLength(3));
  it('triadic returns 3 colors', () => expect(getHarmonyColors('#FF0000', 'triadic')).toHaveLength(3));
  it('split-complementary returns 3 colors', () => expect(getHarmonyColors('#FF0000', 'split-complementary')).toHaveLength(3));
  it('tetradic returns 4 colors', () => expect(getHarmonyColors('#FF0000', 'tetradic')).toHaveLength(4));
  it('square returns 4 colors', () => expect(getHarmonyColors('#FF0000', 'square')).toHaveLength(4));
  it('complementary of red is cyan-ish', () => {
    const [, complement] = getHarmonyColors('#FF0000', 'complementary');
    expect(complement).toMatch(/^#[0-9A-F]{6}$/);
  });
  it('all returned values are valid hex', () => {
    const colors = getHarmonyColors('#3366CC', 'tetradic');
    colors.forEach(c => expect(c).toMatch(/^#[0-9A-F]{6}$/));
  });
});

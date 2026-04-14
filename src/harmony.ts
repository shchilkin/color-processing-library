import { hexToHsl, hslToHex } from './conversions';

export type HarmonyMode = 'complementary' | 'analogous' | 'triadic' | 'split-complementary' | 'tetradic' | 'square';

export function getHarmonyColors(hex: string, mode: HarmonyMode): string[] {
  const { h, s, l } = hexToHsl(hex);
  const wrap = (deg: number) => ((deg % 360) + 360) % 360;
  const make = (deg: number) => hslToHex(wrap(deg), s, l);

  switch (mode) {
    case 'complementary':
      return [hex.startsWith('#') ? hex.toUpperCase() : '#' + hex.toUpperCase(), make(h + 180)];
    case 'analogous':
      return [make(h - 30), hex.startsWith('#') ? hex.toUpperCase() : '#' + hex.toUpperCase(), make(h + 30)];
    case 'triadic':
      return [hex.startsWith('#') ? hex.toUpperCase() : '#' + hex.toUpperCase(), make(h + 120), make(h + 240)];
    case 'split-complementary':
      return [hex.startsWith('#') ? hex.toUpperCase() : '#' + hex.toUpperCase(), make(h + 150), make(h + 210)];
    case 'tetradic':
    case 'square':
      return [hex.startsWith('#') ? hex.toUpperCase() : '#' + hex.toUpperCase(), make(h + 90), make(h + 180), make(h + 270)];
  }
}

interface RGB {
    r: number;
    g: number;
    b: number;
}
interface RGBA extends RGB {
    a: number;
}
interface HSL {
    h: number;
    s: number;
    l: number;
}
interface HSLA extends HSL {
    a: number;
}
interface HSV {
    h: number;
    s: number;
    v: number;
}

declare function isValidHex(hex: unknown): boolean;
declare function isValidRGB(r: number, g: number, b: number): boolean;
declare function isValidHSL(h: number, s: number, l: number): boolean;

declare function hexToRgb(hex: string): RGB;
declare function rgbToHex(r: number, g: number, b: number): string;
declare function rgbToHsl(r: number, g: number, b: number): HSL;
declare function hslToRgb(h: number, s: number, l: number): RGB;
declare function rgbToHsv(r: number, g: number, b: number): HSV;
declare function hsvToRgb(h: number, s: number, v: number): RGB;
declare function hexToHsl(hex: string): HSL;
declare function hslToHex(h: number, s: number, l: number): string;

declare function getRelativeLuminance(r: number, g: number, b: number): number;
declare function getContrastRatio(hex1: string, hex2: string): number;
declare function getReadableTextColor(hex: string, dark?: string, light?: string): string;
declare function getReadableTextColorFromRGB(r: number, g: number, b: number, dark?: string, light?: string): string;
declare function meetsWcagAA(hex1: string, hex2: string, largeText?: boolean): boolean;
declare function meetsWcagAAA(hex1: string, hex2: string, largeText?: boolean): boolean;

declare function lighten(hex: string, amount: number): string;
declare function darken(hex: string, amount: number): string;
declare function saturate(hex: string, amount: number): string;
declare function desaturate(hex: string, amount: number): string;
declare function mix(hex1: string, hex2: string, weight?: number): string;
declare function invert(hex: string): string;
declare function getTintsAndShades(hex: string, steps?: number): string[];

type HarmonyMode = 'complementary' | 'analogous' | 'triadic' | 'split-complementary' | 'tetradic' | 'square';
declare function getHarmonyColors(hex: string, mode: HarmonyMode): string[];

declare function randomInt(min: number, max: number): number;
declare function randomRGB(): RGB;
declare function randomHex(): string;

export { type HSL, type HSLA, type HSV, type HarmonyMode, type RGB, type RGBA, darken, desaturate, getContrastRatio, getHarmonyColors, getReadableTextColor, getReadableTextColorFromRGB, getRelativeLuminance, getTintsAndShades, hexToHsl, hexToRgb, hslToHex, hslToRgb, hsvToRgb, invert, isValidHSL, isValidHex, isValidRGB, lighten, meetsWcagAA, meetsWcagAAA, mix, randomHex, randomInt, randomRGB, rgbToHex, rgbToHsl, rgbToHsv, saturate };

# color-processing-library

A modern TypeScript library for color processing — conversions, accessibility, manipulation, harmony, and more.

## Installation

```bash
npm install color-processing-library
```

## Usage

```ts
import { hexToRgb, getContrastRatio, lighten, getHarmonyColors } from 'color-processing-library';

const rgb = hexToRgb('#FF5733');
// { r: 255, g: 87, b: 51 }

const ratio = getContrastRatio('#000000', '#FFFFFF');
// 21

const lighter = lighten('#336699', 10);
// '#4D80B3'

const colors = getHarmonyColors('#FF0000', 'triadic');
// ['#FF0000', '#00FF00', '#0000FF']
```

## Type Definitions

```ts
interface RGB  { r: number; g: number; b: number }
interface RGBA { r: number; g: number; b: number; a: number }
interface HSL  { h: number; s: number; l: number }
interface HSLA { h: number; s: number; l: number; a: number }
interface HSV  { h: number; s: number; v: number }

type HarmonyMode =
  | 'complementary'
  | 'analogous'
  | 'triadic'
  | 'split-complementary'
  | 'tetradic'
  | 'square';
```

## API Reference

### Validation

#### `isValidHex(hex: unknown): boolean`
Returns `true` if `hex` is a valid 3- or 6-character hex color string (with or without `#`).

```ts
isValidHex('#AABBCC'); // true
isValidHex('FFF');     // true
isValidHex('#GGG');    // false
```

#### `isValidRGB(r: number, g: number, b: number): boolean`
Returns `true` if all three values are integers in [0, 255].

```ts
isValidRGB(0, 128, 255); // true
isValidRGB(256, 0, 0);   // false
```

#### `isValidHSL(h: number, s: number, l: number): boolean`
Returns `true` if `h` ∈ [0, 360), `s` ∈ [0, 100], `l` ∈ [0, 100].

```ts
isValidHSL(180, 50, 50); // true
isValidHSL(360, 0, 0);   // false
```

---

### Conversions

#### `hexToRgb(hex: string): RGB`
Converts a hex color string to `{ r, g, b }`. Throws `TypeError` for invalid input.

```ts
hexToRgb('#FF0000'); // { r: 255, g: 0, b: 0 }
hexToRgb('#FFF');    // { r: 255, g: 255, b: 255 }
```

#### `rgbToHex(r: number, g: number, b: number): string`
Converts RGB values to an uppercase hex color string. Values are clamped to [0, 255].

```ts
rgbToHex(255, 0, 0); // '#FF0000'
```

#### `rgbToHsl(r: number, g: number, b: number): HSL`
Converts RGB to `{ h, s, l }` (h in degrees 0–359, s and l in percent 0–100).

```ts
rgbToHsl(255, 0, 0); // { h: 0, s: 100, l: 50 }
```

#### `hslToRgb(h: number, s: number, l: number): RGB`
Converts HSL to `{ r, g, b }`.

```ts
hslToRgb(120, 100, 50); // { r: 0, g: 255, b: 0 }
```

#### `rgbToHsv(r: number, g: number, b: number): HSV`
Converts RGB to `{ h, s, v }` (HSV/HSB color model).

```ts
rgbToHsv(255, 0, 0); // { h: 0, s: 100, v: 100 }
```

#### `hsvToRgb(h: number, s: number, v: number): RGB`
Converts HSV to `{ r, g, b }`.

```ts
hsvToRgb(0, 100, 100); // { r: 255, g: 0, b: 0 }
```

#### `hexToHsl(hex: string): HSL`
Shorthand for `rgbToHsl(hexToRgb(hex))`.

```ts
hexToHsl('#FF0000'); // { h: 0, s: 100, l: 50 }
```

#### `hslToHex(h: number, s: number, l: number): string`
Shorthand for `rgbToHex(hslToRgb(h, s, l))`.

```ts
hslToHex(0, 100, 50); // '#FF0000'
```

---

### Accessibility

#### `getRelativeLuminance(r: number, g: number, b: number): number`
Returns the WCAG relative luminance (0 = black, 1 = white).

```ts
getRelativeLuminance(0, 0, 0);       // 0
getRelativeLuminance(255, 255, 255); // ~1
```

#### `getContrastRatio(hex1: string, hex2: string): number`
Returns the WCAG contrast ratio between two colors (1–21).

```ts
getContrastRatio('#000000', '#FFFFFF'); // 21
```

#### `getReadableTextColor(hex: string, dark?: string, light?: string): string`
Returns a dark or light color that is readable on the given background. Defaults to `#000000` / `#FFFFFF`.

```ts
getReadableTextColor('#FFFFFF'); // '#000000'
getReadableTextColor('#000000'); // '#FFFFFF'
getReadableTextColor('#FFFFFF', '#333333'); // '#333333'
```

#### `getReadableTextColorFromRGB(r: number, g: number, b: number, dark?: string, light?: string): string`
Same as `getReadableTextColor` but accepts RGB values directly.

```ts
getReadableTextColorFromRGB(255, 255, 255); // '#000000'
```

#### `meetsWcagAA(hex1: string, hex2: string, largeText?: boolean): boolean`
Returns `true` if the contrast ratio meets WCAG AA (≥4.5, or ≥3.0 for large text).

```ts
meetsWcagAA('#000000', '#FFFFFF');       // true
meetsWcagAA('#000000', '#FFFFFF', true); // true (large text)
```

#### `meetsWcagAAA(hex1: string, hex2: string, largeText?: boolean): boolean`
Returns `true` if the contrast ratio meets WCAG AAA (≥7.0, or ≥4.5 for large text).

```ts
meetsWcagAAA('#000000', '#FFFFFF'); // true
```

---

### Manipulation

#### `lighten(hex: string, amount: number): string`
Increases the lightness by `amount` percent (0–100).

```ts
lighten('#000000', 50); // '#808080'
```

#### `darken(hex: string, amount: number): string`
Decreases the lightness by `amount` percent (0–100).

```ts
darken('#FFFFFF', 50); // '#808080'
```

#### `saturate(hex: string, amount: number): string`
Increases the saturation by `amount` percent (0–100).

```ts
saturate('#808080', 50); // a more saturated color
```

#### `desaturate(hex: string, amount: number): string`
Decreases the saturation by `amount` percent (0–100).

```ts
desaturate('#FF0000', 100); // '#808080' (fully grey)
```

#### `mix(hex1: string, hex2: string, weight?: number): string`
Mixes two colors. `weight` (0–100) is the percentage of `hex1`. Default is 50.

```ts
mix('#000000', '#FFFFFF', 50); // '#808080'
mix('#FF0000', '#0000FF', 100); // '#FF0000'
```

#### `invert(hex: string): string`
Inverts all RGB channels.

```ts
invert('#FF0000'); // '#00FFFF'
invert('#000000'); // '#FFFFFF'
```

#### `getTintsAndShades(hex: string, steps?: number): string[]`
Returns an array of tints and shades from dark to light. Default `steps` is 10.

```ts
getTintsAndShades('#FF0000');    // 10 hex strings
getTintsAndShades('#FF0000', 5); // 5 hex strings
```

---

### Harmony

#### `getHarmonyColors(hex: string, mode: HarmonyMode): string[]`
Returns a palette of harmonically related colors.

| Mode                  | Count | Description                        |
|-----------------------|-------|------------------------------------|
| `'complementary'`     | 2     | Opposite on the color wheel         |
| `'analogous'`         | 3     | Adjacent colors (±30°)              |
| `'triadic'`           | 3     | Evenly spaced (120° apart)          |
| `'split-complementary'` | 3   | Base + two colors adjacent to complement |
| `'tetradic'`          | 4     | Four colors (90° apart)             |
| `'square'`            | 4     | Alias for tetradic                  |

```ts
getHarmonyColors('#FF0000', 'complementary');
// ['#FF0000', '#00FFFF']

getHarmonyColors('#FF0000', 'triadic');
// ['#FF0000', '#00FF00', '#0000FF']
```

---

### Random

#### `randomHex(): string`
Returns a random hex color string.

```ts
randomHex(); // e.g. '#3A7FCC'
```

#### `randomRGB(): RGB`
Returns a random `{ r, g, b }` object.

```ts
randomRGB(); // e.g. { r: 58, g: 127, b: 204 }
```

#### `randomInt(min: number, max: number): number`
Returns a random integer between `min` and `max` (inclusive).

```ts
randomInt(0, 255); // e.g. 127
```

---

## License

MIT © [Aleksandr Shchilkin](https://crazyredkitten.media/)

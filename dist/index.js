"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  darken: () => darken,
  desaturate: () => desaturate,
  getContrastRatio: () => getContrastRatio,
  getHarmonyColors: () => getHarmonyColors,
  getReadableTextColor: () => getReadableTextColor,
  getReadableTextColorFromRGB: () => getReadableTextColorFromRGB,
  getRelativeLuminance: () => getRelativeLuminance,
  getTintsAndShades: () => getTintsAndShades,
  hexToHsl: () => hexToHsl,
  hexToRgb: () => hexToRgb,
  hslToHex: () => hslToHex,
  hslToRgb: () => hslToRgb,
  hsvToRgb: () => hsvToRgb,
  invert: () => invert,
  isValidHSL: () => isValidHSL,
  isValidHex: () => isValidHex,
  isValidRGB: () => isValidRGB,
  lighten: () => lighten,
  meetsWcagAA: () => meetsWcagAA,
  meetsWcagAAA: () => meetsWcagAAA,
  mix: () => mix,
  randomHex: () => randomHex,
  randomInt: () => randomInt,
  randomRGB: () => randomRGB,
  rgbToHex: () => rgbToHex,
  rgbToHsl: () => rgbToHsl,
  rgbToHsv: () => rgbToHsv,
  saturate: () => saturate
});
module.exports = __toCommonJS(index_exports);

// src/validate.ts
function isValidHex(hex) {
  if (typeof hex !== "string") return false;
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex);
}
function isValidRGB(r, g, b) {
  const isValid = (n) => Number.isInteger(n) && n >= 0 && n <= 255;
  return isValid(r) && isValid(g) && isValid(b);
}
function isValidHSL(h, s, l) {
  return h >= 0 && h < 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

// src/utils.ts
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function toChannelHex(n) {
  return Math.round(clamp(n, 0, 255)).toString(16).toUpperCase().padStart(2, "0");
}
function normaliseHex(hex) {
  if (typeof hex !== "string") throw new TypeError(`Invalid hex color: ${hex}`);
  let h = hex.trim();
  if (h.startsWith("#")) h = h.slice(1);
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  if (!/^[0-9A-Fa-f]{6}$/.test(h)) throw new TypeError(`Invalid hex color: ${hex}`);
  return h.toUpperCase();
}

// src/conversions.ts
function hexToRgb(hex) {
  const h = normaliseHex(hex);
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16)
  };
}
function rgbToHex(r, g, b) {
  return "#" + toChannelHex(r) + toChannelHex(g) + toChannelHex(b);
}
function rgbToHsl(r, g, b) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  switch (max) {
    case rn:
      h = (gn - bn) / d + (gn < bn ? 6 : 0);
      break;
    case gn:
      h = (bn - rn) / d + 2;
      break;
    default:
      h = (rn - gn) / d + 4;
      break;
  }
  h = h / 6;
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
function hslToRgb(h, s, l) {
  const sn = s / 100, ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const hn = h / 60;
  const x = c * (1 - Math.abs(hn % 2 - 1));
  let r = 0, g = 0, b = 0;
  if (hn < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (hn < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (hn < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (hn < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (hn < 5) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  const m = ln - c / 2;
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}
function rgbToHsv(r, g, b) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const v = max;
  const d = max - min;
  const s = max === 0 ? 0 : d / max;
  let h = 0;
  if (max !== min) {
    switch (max) {
      case rn:
        h = (gn - bn) / d + (gn < bn ? 6 : 0);
        break;
      case gn:
        h = (bn - rn) / d + 2;
        break;
      default:
        h = (rn - gn) / d + 4;
        break;
    }
    h = h / 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100)
  };
}
function hsvToRgb(h, s, v) {
  const sn = s / 100, vn = v / 100;
  const i = Math.floor(h / 60) % 6;
  const f = h / 60 - Math.floor(h / 60);
  const p = vn * (1 - sn);
  const q = vn * (1 - f * sn);
  const t = vn * (1 - (1 - f) * sn);
  let r = 0, g = 0, b = 0;
  switch (i) {
    case 0:
      r = vn;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = vn;
      b = p;
      break;
    case 2:
      r = p;
      g = vn;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = vn;
      break;
    case 4:
      r = t;
      g = p;
      b = vn;
      break;
    default:
      r = vn;
      g = p;
      b = q;
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function hexToHsl(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHsl(r, g, b);
}
function hslToHex(h, s, l) {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

// src/accessibility.ts
function getRelativeLuminance(r, g, b) {
  const linearise = (c) => {
    const sRGB = c / 255;
    return sRGB <= 0.04045 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearise(r) + 0.7152 * linearise(g) + 0.0722 * linearise(b);
}
function getContrastRatio(hex1, hex2) {
  const { r: r1, g: g1, b: b1 } = hexToRgb(hex1);
  const { r: r2, g: g2, b: b2 } = hexToRgb(hex2);
  const l1 = getRelativeLuminance(r1, g1, b1);
  const l2 = getRelativeLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}
function getReadableTextColor(hex, dark = "#000000", light = "#FFFFFF") {
  const { r, g, b } = hexToRgb(hex);
  return getReadableTextColorFromRGB(r, g, b, dark, light);
}
function getReadableTextColorFromRGB(r, g, b, dark = "#000000", light = "#FFFFFF") {
  const luminance = getRelativeLuminance(r, g, b);
  return luminance > 0.179 ? dark : light;
}
function meetsWcagAA(hex1, hex2, largeText = false) {
  const ratio = getContrastRatio(hex1, hex2);
  return largeText ? ratio >= 3 : ratio >= 4.5;
}
function meetsWcagAAA(hex1, hex2, largeText = false) {
  const ratio = getContrastRatio(hex1, hex2);
  return largeText ? ratio >= 4.5 : ratio >= 7;
}

// src/manipulation.ts
function lighten(hex, amount) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, clamp(l + amount, 0, 100));
}
function darken(hex, amount) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, clamp(l - amount, 0, 100));
}
function saturate(hex, amount) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, clamp(s + amount, 0, 100), l);
}
function desaturate(hex, amount) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, clamp(s - amount, 0, 100), l);
}
function mix(hex1, hex2, weight = 50) {
  const c1 = hexToRgb(hex1), c2 = hexToRgb(hex2);
  const w = clamp(weight, 0, 100) / 100;
  return rgbToHex(
    Math.round(clamp(c1.r * w + c2.r * (1 - w), 0, 255)),
    Math.round(clamp(c1.g * w + c2.g * (1 - w), 0, 255)),
    Math.round(clamp(c1.b * w + c2.b * (1 - w), 0, 255))
  );
}
function invert(hex) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(255 - r, 255 - g, 255 - b);
}
function getTintsAndShades(hex, steps = 10) {
  const { h, s } = hexToHsl(hex);
  const result = [];
  for (let i = 0; i < steps; i++) {
    const l = 10 + 80 / (steps - 1) * i;
    result.push(hslToHex(h, s, l));
  }
  return result;
}

// src/harmony.ts
function getHarmonyColors(hex, mode) {
  const { h, s, l } = hexToHsl(hex);
  const wrap = (deg) => (deg % 360 + 360) % 360;
  const make = (deg) => hslToHex(wrap(deg), s, l);
  switch (mode) {
    case "complementary":
      return [hex.startsWith("#") ? hex.toUpperCase() : "#" + hex.toUpperCase(), make(h + 180)];
    case "analogous":
      return [make(h - 30), hex.startsWith("#") ? hex.toUpperCase() : "#" + hex.toUpperCase(), make(h + 30)];
    case "triadic":
      return [hex.startsWith("#") ? hex.toUpperCase() : "#" + hex.toUpperCase(), make(h + 120), make(h + 240)];
    case "split-complementary":
      return [hex.startsWith("#") ? hex.toUpperCase() : "#" + hex.toUpperCase(), make(h + 150), make(h + 210)];
    case "tetradic":
    case "square":
      return [hex.startsWith("#") ? hex.toUpperCase() : "#" + hex.toUpperCase(), make(h + 90), make(h + 180), make(h + 270)];
  }
}

// src/random.ts
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomRGB() {
  return { r: randomInt(0, 255), g: randomInt(0, 255), b: randomInt(0, 255) };
}
function randomHex() {
  const { r, g, b } = randomRGB();
  return "#" + toChannelHex(r) + toChannelHex(g) + toChannelHex(b);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  darken,
  desaturate,
  getContrastRatio,
  getHarmonyColors,
  getReadableTextColor,
  getReadableTextColorFromRGB,
  getRelativeLuminance,
  getTintsAndShades,
  hexToHsl,
  hexToRgb,
  hslToHex,
  hslToRgb,
  hsvToRgb,
  invert,
  isValidHSL,
  isValidHex,
  isValidRGB,
  lighten,
  meetsWcagAA,
  meetsWcagAAA,
  mix,
  randomHex,
  randomInt,
  randomRGB,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  saturate
});

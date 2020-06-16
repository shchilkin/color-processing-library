export function calculateTintAndShades(red, green, blue, factor = 85,outputMode = 'hex') {
    let _factor = factor / 100;
    switch (outputMode) {
        case "rgb":
            return `rgb(${calculateColor(red, _factor)},
            ${calculateColor(green, _factor)},
            ${calculateColor(blue, _factor)}`
        default:
        case "hex":
            let hexRed = toHex(calculateColor(red, _factor));
            let hexGreen = toHex(calculateColor(green, _factor));
            let hexBlue = toHex(calculateColor(blue, _factor))
            return `#${hexRed}${hexGreen}${hexBlue}`
    }
}

export function fontColorHex(Hex) {
    const {Red, Green, Blue} = hexToRGB(Hex);

    let luminance = ((0.299 * Red) + (0.587 * Green) + (0.114 * Blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}

export function isHexValid(hex, checkWithHash = false) {
    // TODO Check hex only with hash

    let hexRegExp = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    let hexRegExpWithHash = /(^#[0-9A-Fa-f]{6})|(^#[0-9A-Fa-f]{3})/; // with #

    const checkCondition = checkWithHash ? hex.match(hexRegExpWithHash) : hex.match(hexRegExp);

    return checkCondition !== null;
}
export function numberRangeCheck(colorValue) {
    if (parseInt(colorValue) > 255) {
        return 255
    } else if (parseInt(colorValue) < 0) {
        return 0
    } else {
        return parseInt(colorValue)
    }
}

export function calculateShadowFactor(number) {
    let factor = parseInt(number) / 100
    if (factor > 2) {
        return 2
    } else if (factor < 0) {
        return 0
    } else {
        return factor
    }
}



export function getRandomInt(maximumNumber) {
    return Math.floor(Math.random() * Math.floor(maximumNumber+1));
}
export function invertFont(font) {
    if (font === '#000' || font === '#000000'){
        return '#FFF'
    }   else if (font === '#FFF' || font === '#FFFFFF'){
        return '#000'
    }
}
export function calculateColors(color, mode='complimentary') {
    switch (mode) {
        case "complimentary":
            if (typeof(color) === "object"){
                return {
                    red: (255 - color.Red || 255 - color.red),
                    green: (255 - color.Green || 255 - color.green),
                    blue: (255 - color.Blue || 255 - color.blue)
                }
            }
            else if (typeof(color) === "string"){
                let {Red, Green, Blue} = hexToRGB(color)
                return `#${toHex(255-Red)}${toHex(255-Green)}${toHex(255-Blue)}`
            }
    }
    //TODO add other cases | generate tones, shades and maybe more...
}
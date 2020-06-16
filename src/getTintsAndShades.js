const toHex = require('./toHex');
const calculateColor = require('./calculateColor');

module.exports = function(red, green, blue, factor = 85, outputMode = 'hex') {
    //  TODO add red, green and blue values validation
    switch (outputMode) {
        case "rgb":
            return `rgb(${calculateColor(red, factor)},${calculateColor(green, factor)},${calculateColor(blue, factor)})`
        default:
        case "hex":
            let hexRed = toHex(calculateColor(red, factor));
            let hexGreen = toHex(calculateColor(green, factor));
            let hexBlue = toHex(calculateColor(blue, factor))
            return `#${hexRed}${hexGreen}${hexBlue}`
    }
}

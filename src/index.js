const calculateColor = require('./calculateColor');
const getFontColor = require('./getFontColor');
const toHex = require('./toHex');
const hexToRGB = require('./hexToRGB');
const isHexColorValid = require('./isHexColorValid');

module.exports = {
    calculateColor: calculateColor,
    getFontColor: getFontColor,
    toHex: toHex,
    hexToRGB: hexToRGB,
    isHexColorValid: isHexColorValid,
}
const calculateColor = require('./calculateColor');
const getFontColor = require('./getFontColor');
const toHex = require('./toHex');
const hexToRGB = require('./hexToRGB');
const isHexColorValid = require('./isHexColorValid');
const getFontColorHex = require('./getFontColorHex');

module.exports = {
    calculateColor: calculateColor,
    getFontColor: getFontColor,
    getFontColorHex: getFontColorHex,
    toHex: toHex,
    hexToRGB: hexToRGB,
    isHexColorValid: isHexColorValid,
}
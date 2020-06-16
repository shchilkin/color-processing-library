/*
     Function calculates and returns either black or white hexadecimal color code
     depend on calculation to match the input color
     * @param {string} | Hexadecimal color value | expected input: #000000 - #FFFFFF | #000 - #FFF
     * @returns {string} | new color value in percent of the initial color
*/
const hexToRGB = require('./hexToRGB')
module.exports = function(Hex) {
    const {Red, Green, Blue} = hexToRGB(Hex);

    let luminance = ((0.299 * Red) + (0.587 * Green) + (0.114 * Blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}
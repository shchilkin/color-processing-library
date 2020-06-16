/**
 Function calculates and returns either black or white hexadecimal color code
 depend on calculation to match the input color

 * @param {number} | Red value | expected input 0 - 255
 * @param {number} | Green value | expected input 0 - 255
 * @param {number} | Blue value | expected input 0 - 255
 * @returns {number} | new color value in percent of the initial color
 */

module.exports = function(red, green, blue) {
    let luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}
/**
 * @param {number} | color | expected input 1 - 255
 * @param {number} | factor |
 * @returns {number} | new color value in percent of the initial color
 */

module.exports = function (color, factor){
    let _color = color * (factor / 100);
    if(_color > 255) {
        return 255
    }
    else if(_color <= 0){
        return 0
    }
    else {
        return Math.round(_color)
    }
}
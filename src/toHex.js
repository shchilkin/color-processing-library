/**
 Function converts 10based number to hexadecimal value
 * @param {number} | 10based number
 * @returns {string} | hexadecimal value
 */


module.exports = function(colorValue){
    let color
    if (colorValue <= 15) {
        color = `0${Number(colorValue).toString(16).toUpperCase()}`
    } else {
        color = `${Number(colorValue).toString(16).toUpperCase()}`
    }
    return color;
}
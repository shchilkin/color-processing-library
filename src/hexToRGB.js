/**
 *Function calculates and returns either black or white hexadecimal color code
 *depend on calculation to match the input color
 * @param {string} | Hexadecimal color value | expected input: #000000 - #FFFFFF | #000 - #FFF
 * @returns {object} | {string} | returns object with Red, Green and Blue values (type number)
 * or string "Invalid Hex code value" if input is incorrect
 */

const isHexColorValid = require('./isHexColorValid');

module.exports = function(hexColor) {
    if (isHexColorValid(hexColor)){
        let hexWithoutHash = hexColor.replace('#','')
        if (hexWithoutHash.length === 3) {
            return {
                Red: parseInt(`${hexWithoutHash.slice(0, 1)}${hexWithoutHash.slice(0, 1)}`, 16),
                Green: parseInt(`${hexWithoutHash.slice(1, 2)}${hexWithoutHash.slice(1, 2)}`, 16),
                Blue: parseInt(`${hexWithoutHash.slice(2, 3)}${hexWithoutHash.slice(2, 3)}`, 16)
            }
        }
        if (hexWithoutHash.length === 6){
            return {
                Red: parseInt(`${hexWithoutHash.slice(0, 2)}`, 16),
                Green: parseInt(`${hexWithoutHash.slice(2, 4)}`, 16),
                Blue: parseInt(`${hexWithoutHash.slice(4, 6)}`, 16)
            }
        }
    }
    else return "Invalid Hex code value"
}
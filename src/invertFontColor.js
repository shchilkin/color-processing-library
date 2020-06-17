/**
 *Function checks font color and inverts it
 * @param {string} | Hexadecimal color value, initial font color
 * @returns {string} | Hexadecimal color value, new font colro
 */


module.exports = function(font) {
    //  TODO Improve functionality - dynamically calculate inversed font color
    if (font === '#000' || font === '#000000'){
        return '#FFF'
    }   else if (font === '#FFF' || font === '#FFFFFF'){
        return '#000'
    }
}
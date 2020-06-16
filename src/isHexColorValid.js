/**
 *Function validates hexadecimal color code and returns boolean value
 * @param {string} | Hexadecimal color value | expected input: #000000 - #FFFFFF | #000 - #FFF
 * @returns {boolean}
 */

module.exports = function(hex) {
    if (hex  === undefined) return false;

    let hexRegExp = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    let hexRegExpWithHash = /(^#[0-9A-Fa-f]{6})|(^#[0-9A-Fa-f]{3})/; // with #

    const checkCondition =(hex.match(hexRegExpWithHash) || hex.match(hexRegExp));

    return checkCondition !== null;
}
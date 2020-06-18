const toHex = require('./toHex');
const hexToRGB = require('./hexToRGB');

module.exports = function(color, mode='complementary') {
    switch (mode) {
        case "complementary":
            if (typeof(color) === "object"){
                return {
                    red: (255 - color.Red || 255 - color.red),
                    green: (255 - color.Green || 255 - color.green),
                    blue: (255 - color.Blue || 255 - color.blue)
                }
            }
            else if (typeof(color) === "string"){
                let {Red, Green, Blue} = hexToRGB(color)
                return `#${toHex(255-Red)}${toHex(255-Green)}${toHex(255-Blue)}`
            }
    }
    //TODO add other cases | generate tones, shades and maybe more...
}
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

// calculateColors function Test cases
const calculateColor = require('../src/index').calculateColor;
describe('calculateColor Function', () => {
    it('Check output when input is greater than 255', () => {
        expect(calculateColor(255, 120)).to.equal(255);
    });
    it('Check output when input is less than 0', () => {
        expect(calculateColor(0, 120)).to.equal(0);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(calculateColor(225, 85)).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(calculateColor(225, 85)).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255 and input is type string', () => {
        expect(calculateColor("225", "85")).to.equal(191);
    });
    it('Check output when input is not valid', () => {
        assert.deepEqual(calculateColor('two hundred and twenty five', "eighty five"),
            NaN, 'value should be NaN');
    });
});

// getFontColor function Test cases
const getFontColor = require('../src/index').getFontColor;
describe('getFontColor Function', () => {
    it('Check output with dark background', () => {
        expect(getFontColor(30,30,30)).to.equal("#FFF");
    });
    it('Check output with light background', () => {
        expect(getFontColor(240,240,240)).to.equal("#000");
    });
    it('Check output with invalid input (NaN)', () => {
        expect(getFontColor(NaN,NaN,NaN)).to.equal("#FFF");
    });
    it('Check output with invalid input (String)', () => {
        expect(getFontColor('red','green','blue')).to.equal("#FFF");
    });
    it('Check output with empty input', () => {
        expect(getFontColor()).to.equal("#FFF");
    });
});

// getFontColorHex function Test cases
const getFontColorHex = require('../src/index').getFontColorHex;
describe('getFontColorHex Function', () => {
    it('Check output with dark background', () => {
        expect(getFontColorHex('#303030')).to.equal("#FFF");
    });
    it('Check output with light background', () => {
        expect(getFontColorHex('#F0F0F0')).to.equal("#000");
    });
    it('Check output with invalid input (String)', () => {
        expect(getFontColorHex('#Hellooo')).to.equal("#FFF");
    });
    it('Check output with empty input', () => {
        expect(getFontColorHex()).to.equal("#FFF");
    });
});

// toHex function Test cases
const toHex = require('../src/index').toHex;
describe('toHex Function', () => {
    it('Check output with 255 as an input', () => {
        expect(toHex(255)).to.equal("FF");
    });
    it('Check output with 300 as an input', () => {
        expect(toHex(300)).to.equal("12C");
    });
    it('Check output with 0 as an input', () => {
        expect(toHex(0)).to.equal("00");
    });
    it('Check output with Invalid value as an input', () => {
        expect(toHex('Hi')).to.equal("NAN");
    });
});

// hexToRGB function Test cases
const hexToRGB = require('../src/index').hexToRGB;
describe('toHex Function', () => {
    it('Check output with #ED2939 as an input(valid input data)', () => {
        expect(hexToRGB('#ed2939')).to.eql({ Red:237, Green:41, Blue:57 });
    });
    it('Check output with empty input', () => {
        expect(hexToRGB()).to.equal("Invalid Hex code value");
    });
    it('Check output with invalid input', () => {
        expect(hexToRGB('#Helloo')).to.equal("Invalid Hex code value");
    });
});

// isHexColorValid function test cases
const isHexColorValid = require('../src/index').isHexColorValid;
describe('isHexColorValid Function', () => {
    it('Check output  with empty input', () => {
        expect(isHexColorValid()).to.equal(false);
    });
    it('Check output with less than 3 characters hex color code without# as an input', () => {
        expect(isHexColorValid('FF')).to.equal(false);
    });
    it('Check output with less than 3 characters hex color code as an input', () => {
        expect(isHexColorValid('#FF')).to.equal(false);
    });
    it('Check output with 3 characters hex color code as an input', () => {
        expect(isHexColorValid('#FFF')).to.equal(true);
    });
    it('Check output with 3 characters hex color code without # as an input', () => {
        expect(isHexColorValid('000')).to.equal(true);
    });
    it('Check output with 6 characters hex color code as an input', () => {
        expect(isHexColorValid('#ED2939')).to.equal(true);
    });
    it('Check output with 6 characters hex color code without #  as an input', () => {
        expect(isHexColorValid('ED2939')).to.equal(true);
    });
    it('Check output with more than 6 characters hex value as an input', () => {
        expect(isHexColorValid('ABDBCCC')).to.equal(false);
    });
    it('Check output with more than 6 characters hex value without # as an input', () => {
        expect(isHexColorValid('ABCDEFAB')).to.equal(false);
    });
});

//getTintsAndShades function test cases
const getTintsAndShades = require('../src/index').getTintsAndShades;
describe('isHexColorValid Function', () => {
    //  TODO Add more tests
    it('Check output  with valid color value, output is rgb', () => {
        expect(getTintsAndShades(255,255,255)).to.equal('#D9D9D9');
    });
    it('Check output  with valid color value, output is hexadecimal', () => {
        expect(getTintsAndShades(255,255,255,85,'rgb')).to.equal('rgb(217,217,217)');
    });
});
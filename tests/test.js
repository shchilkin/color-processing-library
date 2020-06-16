const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const calculateColor = require('../src/calculateColor');
const getFontColor = require('../src/getFontColor');

// calculate Colors Test cases
const inputGreaterThan255 = calculateColor(255, 120);
const inputLessThan0 = calculateColor(0, 120);
const inputInRightRange = calculateColor(225, 85);
const inputInRightRangeAndTypeString = calculateColor("225", "85");
const inputInvalid = calculateColor('two hundred and twenty five', "eighty five");

describe('calculateColor Function', () => {
    it('Check output when input is greater than 255', () => {
        expect(inputGreaterThan255).to.equal(255);
    });
    it('Check output when input is less than 0', () => {
        expect(inputLessThan0).to.equal(0);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(inputInRightRange).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(inputInRightRange).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255 and input is type string', () => {
        expect(inputInRightRangeAndTypeString).to.equal(191);
    });
    it('Check output when input is not valid', () => {
        assert.deepEqual(inputInvalid, NaN, 'value should be NaN');
    });
});


// get Font Color Test cases
const darkBackgroundInput = getFontColor(30,30,30);
const lightBackgroundInput = getFontColor(240,240,240);
const NaNInput = getFontColor(NaN,NaN,NaN);
const stringInput = getFontColor('red','green','blue');

describe('getFontColor Function', () => {
    it('Check output with dark background', () => {
        expect(darkBackgroundInput).to.equal("#FFF");
    });
    it('Check output with light background', () => {
        expect(lightBackgroundInput).to.equal("#000");
    });
    it('Check output with invalid input (NaN)', () => {
        expect(NaNInput).to.equal("#FFF");
    });
    it('Check output with invalid input (String)', () => {
        expect(stringInput).to.equal("#FFF");
    });
    it('Check output with empty input', () => {
        expect(getFontColor()).to.equal("#FFF");
    });
});





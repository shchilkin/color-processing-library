const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const calculateColor = require('../src/calculateColor');

// calculate Colors Test cases
const outputGreaterThan255 = calculateColor(255, 120);
const outputLessThan0 = calculateColor(0, 120);
const outputInRightRange = calculateColor(225, 85);
const outputInRightRangeAndTypeString = calculateColor("225", "85");
const outputInvalid = calculateColor('two hundred and twenty five', "eighty five");


describe('calculateColor Function', () => {
    it('Check output when input is greater than 255', () => {
        expect(outputGreaterThan255).to.equal(255);
    });
    it('Check output when input is less than 0', () => {
        expect(outputLessThan0).to.equal(0);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(outputInRightRange).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255', () => {
        expect(outputInRightRange).to.equal(191);
    });
    it('Check output when input is in range between 0 and 255 and input is type string', () => {
        expect(outputInRightRangeAndTypeString).to.equal(191);
    });
    it('Check output when input is not valid', () => {
        assert.deepEqual(outputInvalid, NaN, 'value should be NaN');
    });
});





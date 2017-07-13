/**
 * Created by Vicky on 7/12/2017.
 */
let isOddOrEven = require('./02. Odd or even').isOddOrEven;
let expect = require('chai').expect;

describe('isOddOrEven(string)', function () {
   it('should return undefined if not string', function () {
       expect(isOddOrEven(9)).to.be.equal(undefined);
   });
    it('should return odd if "abc"', function () {
        expect(isOddOrEven('abc')).to.be.equal('odd');
    });
    it('should return even if "abcd"', function () {
        expect(isOddOrEven('abcd')).to.be.equal('even');
    });
});
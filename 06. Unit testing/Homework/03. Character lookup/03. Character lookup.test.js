/**
 * Created by Vicky on 7/12/2017.
 */
let lookupChar = require('./03. Character lookup').lookupChar;
let expect = require('chai').expect;

describe('lookupchar', function () {
    describe('specialcases(incorrect input)', function () {
        it('should return undefined if not string', function () {
            expect(lookupChar(9, 9)).to.be.equal(undefined);
        });
        it('should return undefined if not number', function () {
            expect(lookupChar('hello', 'hello')).to.be.equal(undefined);
        });
        it('should return undefined if fraction', function () {
            expect(lookupChar('hello', 3.5)).to.be.equal(undefined);
        });
        it('should return incorrect index if index<0', function () {
            expect(lookupChar('hello', -5)).to.be.equal('Incorrect index');
        });
        it('should return incorrect index if index>string length', function () {
            expect(lookupChar('hello', 9)).to.be.equal('Incorrect index');
        });

        it('should return incorrect index if index=string length', function () {
            expect(lookupChar('hello', 5)).to.be.equal('Incorrect index');
        });
    });
    describe('regular cases(correct input)', function () {
        it('should return l if hello, 2', function () {
            expect(lookupChar('hello', 2)).to.be.equal('l');
        })
    })
})


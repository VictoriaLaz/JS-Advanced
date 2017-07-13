/**
 * Created by Vicky on 7/12/2017.
 */
let mathEnforcer = require('./04. Math enforcer').mathEnforcer;
let expect = require('chai').expect;

describe('mathEnforcer', function () {
    let math;
    beforeEach(function () {
        math = mathEnforcer;
    });
    describe('addFive', function () {
        it('should return undefined if parameter is not number', function () {
            expect(math.addFive('hello')).to.be.equal(undefined);
        });
        it('should return correct value with int',function () {
            expect(math.addFive(10)).to.be.equal(15);
        });
        it('should return correct value with fraction',function () {
            expect(math.addFive(3.5)).to.be.equal(8.5);
        });
        it('should return correct value with negative',function () {
            expect(math.addFive(-10)).to.be.equal(-5);
        });
    });
    describe('subtractTen', function () {
        it('should return undefined if parameter is not number', function () {
            expect(math.subtractTen('hello')).to.be.equal(undefined);
        });
        it('should return correct value with int',function () {
            expect(math.subtractTen(10)).to.be.equal(0);
        });
        it('should return correct value with fraction',function () {
            expect(math.subtractTen(3.5)).to.be.equal(-6.5);
        });
        it('should return correct value with negative',function () {
            expect(math.subtractTen(-10)).to.be.equal(-20);
        });
    });
    describe('sum', function () {
        it('should return undefined if parameter is not number', function () {
            expect(math.sum('hello', 5)).to.be.equal(undefined);
        });
        it('should return undefined if parameter is not number', function () {
            expect(math.sum(5,'hello')).to.be.equal(undefined);
        });
        it('should return correct value with int',function () {
            expect(math.sum(10,5)).to.be.equal(15);
        });
        it('should return correct value with fraction',function () {
            expect(math.sum(3.5, 4.5)).to.be.equal(8);
        });
        it('should return correct value with fraction',function () {
            expect(math.sum(-3.5, -4.5)).to.be.equal(-8);
        });
    })
});
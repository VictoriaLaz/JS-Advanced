/**
 * Created by Vicky on 7/11/2017.
 */
let createCalculator = require('./07. AddSubstract').createCalculator;
let expect = require('chai').expect;

describe('createCalculator', ()=>{
    let calculator;
    beforeEach(()=>{
        calculator = createCalculator();
    });
    it('get should return zero on start', ()=>{
        expect(calculator.get()).to.be.equal(0);
    });
    it("should return 5 after {add 3; add 2}", function() {
        calculator.add(3);
        calculator.add(2);
        expect(calculator.get()).to.be.equal(5);
    });
    it("should return -5 after {subtract 3; subtract 2}", function() {
        calculator.subtract(3);
        calculator.subtract(2);
        expect(calculator.get()).to.be.equal(-5);
    });
    it("should return 4.2 after {add 5.3; subtract 1.1}", function() {
        calculator.add(5.3);
        calculator.subtract(1.1);
        expect(calculator.get()).to.be.closeTo(4.2, 0.0001);
    });
    it("should return 4 after {add '5'}", function() {
        calculator.add('5');

        expect(calculator.get()).to.be.equal(5);
    });
    it("should return -5 after {subtract '5'}", function() {
        calculator.subtract('5');

        expect(calculator.get()).to.be.equal(5);
    });

    it("should return Nan after {add 'hello'}", function() {
        calculator.add('hello');
        expect(calculator.get()).to.be.NaN;
    });
    it("should return Nan after {subtract 'hello'}", function() {
        calculator.subtract('hello');
        expect(calculator.get()).to.be.NaN;
    });
});
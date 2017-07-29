/**
 * Created by Vicky on 7/23/2017.
 */
let Sumator = require('./02. Summator').Sumator;
let expect = require('chai').expect;

describe('sumator class', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    })
    describe('initial state', function () {
        it('initial data should be empty', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        })
        it('has to have function add', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        })
        it('has to have function sumNums', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        })
        it('has to have function removeByFilter', function () {
            expect(Summator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        })
        it('has to have function toString', function () {
            expect(Summator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        })
    })
    describe('add function', function () {
        it('has to add one item', function () {
            sumator.add(5)
            expect(sumator.toString()).to.be.equal('5')
        })
        it('has to add more items', function () {
            sumator.add(5);
            sumator.add('Pesho');
            expect(sumator.toString()).to.be.equal('5, Pesho')
        })
    })
    describe('sumNum function', function () {
        it('has to return zero with no elements', function () {
            expect(sumator.sumNums()).to.be.equal(0);
        })
        it('has to return zero with no matching elements', function () {
            sumator.add('Pesho');
            sumator.add('Gosho');
            expect(sumator.sumNums()).to.be.equal(0);
        })
        it('has to return sum with positive elements', function () {
            sumator.add(5);
            sumator.add('Gosho');
            sumator.add(10);
            expect(sumator.sumNums()).to.be.equal(15);
        })
        it('has to return sum with negative elements', function () {
            sumator.add(5);
            sumator.add('Gosho');
            sumator.add(-10);
            expect(sumator.sumNums()).to.be.equal(-5);
        })
        it('has to return sum with fractions', function () {
            sumator.add(5.5);
            sumator.add('Gosho');
            sumator.add(10.5);
            expect(sumator.sumNums()).to.be.equal(16);
        })
        it('has to return sum with negative fractions', function () {
            sumator.add(5.3);
            sumator.add('Gosho');
            sumator.add(-10.3);
            expect(sumator.sumNums()).to.be.closeTo(-5, 0.01);
        })
    })
    describe('remove by filter', function () {
        it('should remove', function () {
            sumator.add(5);
            sumator.add(10);
            sumator.add(1);
            sumator.add(20);
            sumator.removeByFilter(x => x < 5)
            expect(sumator.toString()).to.be.equal('5, 10, 20')
        })

    })
})
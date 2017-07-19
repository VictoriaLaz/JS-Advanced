/**
 * Created by Vicky on 7/19/2017.
 */
let SortedList = require('./02. Sorted list').SortedList;
let expect = require('chai').expect;

describe('sorted list', function () {
    let list;
    beforeEach(function () {
        list = new SortedList();
    });
    describe('initial state', function () {
        it('check for add function', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
        });
        it('check for remove function', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
        });
        it('check for get function', function () {
            expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
        });
        it('check for size function', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
        });
        it('list should return empty at start', function () {
            expect(list.list.length).to.be.equal(0);
        });
    });
    describe('add function', function () {
        it('should return value with one add', function () {
            list.add(5)
            expect(list.list.join(', ')).to.be.equal('5');
        });
        it('should return sorted value with several add', function () {
            list.add(5);
            list.add(10);
            list.add(1)
            expect(list.list.join(', ')).to.be.equal('1, 5, 10');
        });
    })
    describe('remove function', function () {
        it('with empty list', function () {
            expect(() => list.remove()).throw(Error, "Collection is empty.")
        });
        it('with negative index', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.remove(-3)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('with index > list.length', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.remove(4)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('with index = list.length', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.remove(3)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('normal case', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            list.remove(1)
            expect(list.list.join(', ')).to.be.equal('1, 3');
        });
    });
    describe('get', function () {
        it('with empty list', function () {
            expect(() => list.get()).throw(Error, "Collection is empty.")
        });
        it('with negative index', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.get(-3)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('with index > list.length', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.get(4)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('with index = list.length', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(() => list.get(3)).throw(Error, "Index was outside the bounds of the collection.")
        });
        it('normal case', function () {
            list.add(2);
            list.add(1);
            list.add(3);

            expect(list.get(1)).to.be.equal(2);
        });
    });
    describe('size', function () {
        it('empty', function () {
        expect(list.size).to.be.equal(0);
        });
        it('not empty', function () {
            list.add(2);
            list.add(1);
            list.add(3);
            expect(list.size).to.be.equal(3);
        })
    })
})
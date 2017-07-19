/**
 * Created by Vicky on 7/19/2017.
 */
let createList = require('./02. AddSwapShift in list').createList;
let expect = require('chai').expect;

describe('createList', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe('initial state', function () {
        it('should have add function', function () {
            expect(list.add).to.exist;
        });
        it('should have shiftLeft function', function () {
            expect(list.shiftLeft).to.exist;
        });
        it('should have shiftRight function', function () {
            expect(list.shiftRight).to.exist;
        });
        it('should have swap function', function () {
            expect(list.swap).to.exist;
        });
        it('should initialize empty', function () {
            expect(list.toString()).to.be.equal('')
        });
    });
    describe('add', function () {
        it('add one element', function () {
            list.add(5);
            expect(list.toString()).to.be.equal('5')
        });
        it('add many elements', function () {
            list.add(5);
            list.add(10)
            expect(list.toString()).to.be.equal('5, 10')
        });
    });
    describe('shiftLeft', function () {
        it('zero elements', function () {
            list.shiftLeft()
            expect(list.toString()).to.be.equal('')
        })
        it('one elements', function () {
            list.add(5)
            list.shiftLeft()
            expect(list.toString()).to.be.equal('5')
        })
        it('many elements', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            list.shiftLeft()
            expect(list.toString()).to.be.equal('Pesho, 3.14, 5')
        })
    })
    describe('shiftRight', function () {
        it('zero elements', function () {
            list.shiftRight()
            expect(list.toString()).to.be.equal('')
        })
        it('one elements', function () {
            list.add(5)
            list.shiftRight()
            expect(list.toString()).to.be.equal('5')
        })
        it('many elements', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            list.shiftRight()
            expect(list.toString()).to.be.equal('3.14, 5, Pesho')
        })
    })
    describe('swap', function () {
        it('index1 not integer', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(2.3, 1)).to.be.equal(false);
        });
        it('index2 not integer', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(1, 'hello')).to.be.equal(false);
        })
        it('index1 <0', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(-1, 1)).to.be.equal(false);
        })
        it('index2<0', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(1, -1)).to.be.equal(false);
        })
        it('index1 > list.length', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(5, 1)).to.be.equal(false);
        })
        it('index2 > list.length', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(1, 5)).to.be.equal(false);
        })
        it('index2 === index1', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(1, 1)).to.be.equal(false);
        })
        it('indexes true', function () {
            list.add(5);
            list.add('Pesho');
            list.add(3.14);
            expect(list.swap(0, 2)).to.be.equal(true);
        })

    })
})
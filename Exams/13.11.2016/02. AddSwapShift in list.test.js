/**
 * Created by Vicky on 7/19/2017.
 */
let createLists = require('./02. AddSwapShift in list').createList;
let expect = require('chai').expect;

describe('createList', function () {
    let createList;
    beforeEach(function () {
        createList = createLists();
    });
    describe('initial state', function () {
        it('should have add function', function () {
            expect(createList.add).to.exist;
        });
        it('should have shiftLeft function', function () {
            expect(createList.shiftLeft).to.exist;
        });
        it('should have shiftRight function', function () {
            expect(createList.shiftRight).to.exist;
        });
        it('should have swap function', function () {
            expect(createList.swap).to.exist;
        });
        it('should initialize empty', function () {
            expect(createList.toString()).to.be.equal('')
        });
    });
    describe('add', function () {
        it('add one element', function () {
            createList.add(5);
            expect(createList.toString()).to.be.equal('5')
        });
        it('add many elements', function () {
            createList.add(5);
            createList.add(10)
            expect(createList.toString()).to.be.equal('5, 10')
        });
    });
    describe('shiftLeft', function () {
        it('zero elements', function () {
            createList.shiftLeft()
            expect(createList.toString()).to.be.equal('')
        })
        it('one elements', function () {
            createList.add(5)
            createList.shiftLeft()
            expect(createList.toString()).to.be.equal('5')
        })
        it('many elements', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            createList.shiftLeft()
            expect(createList.toString()).to.be.equal('Pesho, 3.14, 5')
        })
    })
    describe('shiftRight', function () {
        it('zero elements', function () {
            createList.shiftRight()
            expect(createList.toString()).to.be.equal('')
        })
        it('one elements', function () {
            createList.add(5)
            createList.shiftRight()
            expect(createList.toString()).to.be.equal('5')
        })
        it('many elements', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            createList.shiftRight()
            expect(createList.toString()).to.be.equal('3.14, 5, Pesho')
        })
    })
    describe('swap', function () {
        it('index1 not integer', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(2.3, 1)).to.be.equal(false);
        });
        it('index2 not integer', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(1, 'hello')).to.be.equal(false);
        })
        it('index1 <0', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(-1, 1)).to.be.equal(false);
        })
        it('index2<0', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(1, -1)).to.be.equal(false);
        })
        it('index1 > list.length', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(5, 1)).to.be.equal(false);
        })
        it('index2 > list.length', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(1, 5)).to.be.equal(false);
        })
        it('index2 === index1', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(1, 1)).to.be.equal(false);
        })
        it('indexes true', function () {
            createList.add(5);
            createList.add('Pesho');
            createList.add(3.14);
            expect(createList.swap(0, 2)).to.be.equal(true);
        })

    })
})
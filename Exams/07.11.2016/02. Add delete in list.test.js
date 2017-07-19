/**
 * Created by Vicky on 7/16/2017.
 */

let expect = require('chai').expect;

describe('addDelete', function () {
    let list;
        beforeEach(function () {
            list = (function () {
                let data = [];
                return {
                    add: function (item) {
                        data.push(item);
                    },
                    delete: function (index) {
                        if (Number.isInteger(index) && index >= 0 && index < data.length) {
                            return data.splice(index, 1)[0];
                        } else {
                            return undefined;
                        }
                    },
                    toString: function () {
                        return data.join(", ");
                    }
                };
            })();
        }
        )

    describe('initial state', function () {
        it('should be empty', function () {
            expect(list.toString()).to.be.equal('')
        })


        it('check if it has add function', function () {
            expect(list.add).to.exist;
        })
        it('check if it has delete function', function () {
            expect(list.delete).to.exist;
        })
    })
    describe('add', function () {
        it('add with one value', function () {
            list.add(5);
            expect(list.toString()).to.be.equal('5')
        })
        it('add with many values', function () {
            list.add(5);
            list.add('pesho');
            list.add(3.14)
            expect(list.toString()).to.be.equal('5, pesho, 3.14')
        })
    })
    describe('delete', function () {
        it('index not int', function () {
            expect(list.delete('hello')).to.be.undefined;
            //expect(list.toString()).to.be.equal('5, 5, pesho, 3.14')
        })
        it('index < 0', function () {
            expect(list.delete(-1)).to.be.undefined;
            //expect(list.toString()).to.be.equal('5, 5, pesho, 3.14')
        })
        it('index > data.length', function () {
            expect(list.delete(5)).to.be.undefined;
            //expect(list.toString()).to.be.equal('5, 5, pesho, 3.14')
        })
        it('normal input for delete', function () {
            list.add(5);
            list.add(5)
            expect(list.delete(1)).to.be.equal(5);
            //expect(list.toString()).to.be.equal('5, 5, pesho, 3.14')
        })
        it('index > data.length', function () {
            list.add(5);
            list.add('pesho')
            list.add(3.14)
            list.delete(1);
            expect(list.toString()).to.be.equal('5, 3.14')
        })
    })
});
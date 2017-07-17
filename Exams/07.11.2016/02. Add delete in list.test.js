/**
 * Created by Vicky on 7/16/2017.
 */
let list = require('./02. Add delete in list').list;
let expect = require('chai').expect;

describe("add/delete", function() {
    it("check functions", function() {
        expect(list.add).to.exist;
        expect(list.delete).to.exist;
    });
    it("add should add one item", function () {
        list.add(1);
        expect(list.toString()).to.be.equal('1');
    });
    it("add should add multiple items", function () {
        list.add(1);
        list.add(2);
        list.add(2);
        list.add('hello');
        expect(list.toString()).to.be.equal('1, 1, 2, 2, hello');
    });
    it('delete should return correctly (correct input)', function () {
        expect(list.delete(1)).to.be.equal(1);
        expect(list.toString()).to.be.equal('1, 2, 2, hello');
    });
    it('delete should return undefined (input not int', function () {
        expect(list.delete(4.5)).to.be.equal(undefined);
    });
    it('delete should return undefined (input < 0)', function () {
        expect(list.delete(-1)).to.be.equal(undefined);
    });
    it('delete should return undefined (input longer than data length)', function () {
        expect(list.delete(4)).to.be.equal(undefined);
    });
});

/**
 * Created by Vicky on 7/15/2017.
 */
let makeList = require('./02. Add').makeList;
let expect = require('chai').expect;

describe('makeList', function () {
    let list;
    beforeEach(function () {
        list = makeList();
    });
    it('addLeft should add item to the left', function () {
        list.addLeft(2);
        list.addLeft(3);
        expect(list.toString()).to.be.equal('3, 2')
    })
});
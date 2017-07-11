/**
 * Created by Vicky on 7/11/2017.
 */
let isSymmetric = require('./05. CheckForSymnmetry').isSymmetric;
let expect = require('chai').expect;

describe("isSymmetric(arr) ", function() {
    it("should return true for [1,2,3,3,2,1]", function() {
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(true);
    });
    it("should return false for [1,2,3,4,2,1]", function() {
        "use strict";
        expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false);
    });
    it("should return true for [-1,2,-1]", function() {
        "use strict";
        expect(isSymmetric([-1,2,-1])).to.be.equal(true);
    });
    it("should return false for [-1,2,1]", function() {
        "use strict";
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it("should return false for [-1,2]", function() {
        "use strict";
        expect(isSymmetric([-1,2])).to.be.equal(false);
    });
    it("should return false for [1]", function() {
        "use strict";
        expect(isSymmetric([1])).to.be.equal(true);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ", function() {
        "use strict";
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.equal(true);
    });
    it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ", function() {
        "use strict";
        expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false);
    });
    it("should return false for not an array", function() {
        "use strict";
        expect(isSymmetric(1,2,2,1)).to.be.equal(false);
    });
});

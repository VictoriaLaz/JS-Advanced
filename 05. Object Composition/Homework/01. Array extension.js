/**
 * Created by Vicky on 7/7/2017.
 */
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++){
            result.push(this[i])
        }
        return result;
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (let n of this) {
            sum+=n;
        }
        return sum;
    }
    Array.prototype.average = function () {
        let sum = 0;
        for (let n of this) {
            sum+=n;
        }
        return sum/this.length;
    }

})();
/**
 * Created by Vicky on 7/3/2017.
 */
let result = (function result(){
    let sum = 0;
    return function sumN(num) {
        sum += num;
        sumN.toString = () => sum;
        return sumN;
    }
})();

console.log(result(1)(6)(-3).toString());

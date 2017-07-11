/**
 * Created by Vicky on 7/11/2017.
 */
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

module.exports = {sum};
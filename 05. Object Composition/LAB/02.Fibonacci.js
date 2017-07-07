/**
 * Created by Vicky on 7/7/2017.
 */
function getFibonator() {
    let fib1 = 0;
    let fib2 = 1;

    return function () {
        let fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
        return fib1;
    }
}
let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
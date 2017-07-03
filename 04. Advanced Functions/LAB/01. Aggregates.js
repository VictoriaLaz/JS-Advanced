/**
 * Created by Vicky on 7/3/2017.
 */
function aggregate(arr) {
    let sum = arr.reduce((a, b) => a+b);
    let min = arr.reduce((a, b) => Math.min(a, b));
    let max = arr.reduce((a, b) => Math.max(a, b));
    let product = arr.reduce((a, b) => a*b);
    let join = arr.reduce((a, b)=>''+a+b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}
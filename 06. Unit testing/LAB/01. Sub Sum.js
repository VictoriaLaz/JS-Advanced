/**
 * Created by Vicky on 7/11/2017.
 */
function subSum(arr, startIndex, endIndex) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex < 0){
        startIndex = 0;
    }
    if(endIndex > arr.length-1){
        endIndex = arr.length-1
    }
    if(arr.length === 0){
        return 0;
    }
    arr = arr.map(a => Number(a));
    arr = arr.slice(startIndex, endIndex+1)
    arr = arr.reduce((a,b)=>a+b);
    return arr;
}
console.log(subSum([], 3, 300));


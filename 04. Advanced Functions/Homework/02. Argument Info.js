/**
 * Created by Vicky on 7/3/2017.
 */
function getInfo() {
    let summary = {};
    let sorted = [];
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let objType = typeof obj;
        console.log(`${objType}: ${obj}`);
        if(!summary[objType]){
            summary[objType] = 1;
        } else {
            summary[objType]++;
        }
    }
    for (let prop in summary) {
        sorted.push([prop, summary[prop]]);
    }
    sorted.sort((a, b) => b[1]-a[1]);
    for (let obj of sorted) {
        console.log(`${obj[0]} = ${obj[1]}`);
    }
}
getInfo('cat', 42, function () { console.log('Hello world!'); });


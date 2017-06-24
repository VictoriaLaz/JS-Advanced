/**
 * Created by Vicky on 6/24/2017.
 */
function sum() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0;
    let output = document.getElementById('sum');
    for(let i = 1; i<rows.length; i++){
        let cols = rows[i].children;
        sum += Number((cols[cols.length-1]).textContent);
    }
    output.textContent = sum;
}
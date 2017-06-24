/**
 * Created by Vicky on 6/24/2017.
 */
function colorize() {
    let rows = document.querySelectorAll('table tr');
    for(let i = 1; i<rows.length; i+=2){
        rows[i].style.background = 'teal';
    }
}
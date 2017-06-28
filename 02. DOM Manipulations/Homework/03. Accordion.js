/**
 * Created by Vicky on 6/26/2017.
 */
function toggle() {
    let button = document.getElementsByClassName('button')[0];
    if (button.textContent === 'More'){
        button.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        button.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}
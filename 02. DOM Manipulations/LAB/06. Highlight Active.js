/**
 * Created by Vicky on 6/25/2017.
 */
function focus() {
    let inputs = document.getElementsByTagName('input');
    let inputCollection = Array.from(inputs);
    for (let input of inputCollection) {
        input.addEventListener('focus', function () {
            this.parentNode.className = 'focused';
        });
        input.addEventListener('blur', function () {
            this.parentNode.removeAttribute('class');
        });
    }
}
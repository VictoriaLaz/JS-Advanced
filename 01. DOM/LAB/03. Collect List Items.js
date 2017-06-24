/**
 * Created by Vicky on 6/24/2017.
 */
function extractText() {
    let items = document.querySelectorAll('ul li');
    let result = document.querySelector('#result');
    for (let item of items) {
        result.value += item.textContent + '\n';
    }
}
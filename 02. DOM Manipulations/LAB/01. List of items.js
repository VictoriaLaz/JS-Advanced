/**
 * Created by Vicky on 6/25/2017.
 */
function addItem() {
    let input = document.getElementById('newItemText').value;
    let newElement = document.createElement('li');
    newElement.textContent = input;
    let list = document.getElementById('items');
    list.appendChild(newElement);
}
/**
 * Created by Vicky on 6/26/2017.
 */
function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let newItemValue = document.getElementById('newItemValue').value;
    let newItem = document.createElement('option');
    newItem.textContent = newItemText;
    newItem.value = newItemValue;
    document.getElementById('menu').appendChild(newItem);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
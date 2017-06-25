/**
 * Created by Vicky on 6/25/2017.
 */
function addItem() {
    let input = document.getElementById('newText').value;
    let newElement = document.createElement('li');
    newElement.textContent = input + ' ';
    let deleteLink = (document.createElement('a'));
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', deleteItem);
    newElement.appendChild(deleteLink);
    let list = document.getElementById('items');
    list.appendChild(newElement);
    function deleteItem() {
        list.removeChild(newElement);
    }
}
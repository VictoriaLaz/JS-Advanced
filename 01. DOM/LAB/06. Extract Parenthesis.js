/**
 * Created by Vicky on 6/24/2017.
 */
function extract(id) {
    let elementId = id;
    let textContent = document.getElementById(elementId).textContent;
    let regex = /\(.+\)/g;
    let matches = textContent.match(regex);
    return matches.join('; ');
}
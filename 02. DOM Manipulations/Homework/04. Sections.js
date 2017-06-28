/**
 * Created by Vicky on 6/26/2017.
 */
function create(sentences) {
    for (let sentence of sentences) {
        let p = document.createElement('p');
        p.textContent = sentence;
        p.style.display = 'none';
        let div = document.createElement('div');
        div.appendChild(p);
        div.addEventListener('click', function () {
            p.style.display = 'inline';
        });
        document.getElementById('content').appendChild(div);
    }

}
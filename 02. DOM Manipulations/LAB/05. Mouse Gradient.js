/**
 * Created by Vicky on 6/25/2017.
 */
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mouseMove);
    gradient.addEventListener('mouseout', mouseOut);
    function mouseMove(event) {
        let percent = event.offsetX/(this.clientWidth - 1);
        percent = Math.trunc(percent*100);
        document.getElementById('result').textContent = percent + '%';
    }
    function mouseOut() {
        document.getElementById('result').textContent = '';

    }
}
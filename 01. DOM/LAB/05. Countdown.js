/**
 * Created by Vicky on 6/24/2017.
 */
function countdown(startTime) {
    let time = startTime;
    let output = document.getElementById('time');
    let timer = setInterval(tick, 1000);

    function tick() {
        time--;
        output.value = `${Math.trunc(time/60)}:${('0' + time%60).slice(-2)}`
    }
}
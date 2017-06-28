/**
 * Created by Vicky on 6/28/2017.
 */
function timer() {
    let timer = null;
    let seconds = 0;
    $('#start-timer').click(function () {
        clearInterval(timer);
        timer = setInterval(tick, 1000);
    });
    $('#stop-timer').click(function () {
        clearInterval(timer)
    });

    function tick() {
        seconds++;
        $('#hours').text(('0' + Math.trunc(seconds/3600)).slice(-2));
        $('#minutes').text(('0'+ Math.trunc((seconds%3600)/60)).slice(-2));
        $('#seconds').text(('0' + (seconds%3600)%60).slice(-2));
    }

}
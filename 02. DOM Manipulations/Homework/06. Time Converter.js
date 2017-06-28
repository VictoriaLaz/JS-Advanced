/**
 * Created by Vicky on 6/26/2017.
 */
function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    daysBtn.addEventListener('click', daysPressed);
    hoursBtn.addEventListener('click', hoursPressed);
    minutesBtn.addEventListener('click', minutesPressed);
    secondsBtn.addEventListener('click', secondsPressed);

    function daysPressed() {
        let value = Number(document.getElementById('days').value);
        document.getElementById('hours').value = value*24;
        document.getElementById('minutes').value = value*24*60;
        document.getElementById('seconds').value = value*24*60*60;
    }
    function hoursPressed() {
        let value = Number(document.getElementById('hours').value);
        document.getElementById('days').value = value/24;
        document.getElementById('minutes').value = value*60;
        document.getElementById('seconds').value = value*60*60;
    }
    function minutesPressed() {
        let value = Number(document.getElementById('minutes').value);
        document.getElementById('hours').value = value/60;
        document.getElementById('days').value = value/1440;
        document.getElementById('seconds').value = value*60;
    }
    function secondsPressed() {
        let value = Number(document.getElementById('seconds').value);
        document.getElementById('hours').value = value/3600;
        document.getElementById('minutes').value = value/60;
        document.getElementById('days').value = value/86400;
    }

}
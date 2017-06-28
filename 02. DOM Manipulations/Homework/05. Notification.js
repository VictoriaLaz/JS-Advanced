/**
 * Created by Vicky on 6/26/2017.
 */
function notify(message) {
    let notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = "block";
    let timer = setTimeout(function () {
        notification.style.display = 'none'
    }, 2000);
}
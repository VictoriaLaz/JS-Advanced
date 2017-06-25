/**
 * Created by Vicky on 6/25/2017.
 */
function validate() {
    document.querySelector('input')
        .addEventListener('change', onChange);
    let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    function onChange(event) {
        if (!regex.test(event.target.value))
            event.target.className = 'error';
        else
            event.target.removeAttribute('class');
    }
}

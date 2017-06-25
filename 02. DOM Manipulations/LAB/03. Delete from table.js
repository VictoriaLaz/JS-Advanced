/**
 * Created by Vicky on 6/25/2017.
 */
function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let emails = document.querySelectorAll('#customers tr td:last-child');
    for (let mail of emails) {
        if(mail.textContent == email){
            let row = mail.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.'
            return;
        }
        document.getElementById('result').textContent = 'Not found.'

    }
}
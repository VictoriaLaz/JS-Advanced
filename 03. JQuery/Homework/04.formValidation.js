function validate() {
    let username = $('#username');
    let password = $('#password');
    let email = $('#email');
    let confPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitButton = $('#submit');
    let valid = $('#valid');
    let isAllValid = true;

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let passwordRegex = /^\w{5,15}$/;
    let emailRegex= /^.*?@.*?\..*?$/;

    submitButton.click(function (ev) {
        ev.preventDefault();
        validateForm();
        valid.css('display', isAllValid ? 'block':'none');
        isAllValid = true;

    });
   companyCheckbox.change(function () {
        if(companyCheckbox.is(':checked')){
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
   })
    function validateForm() {
        validateInputWithRegex(username, usernameRegex);
        validateInputWithRegex(email, emailRegex);
        if(password.val() === confPassword.val()){
            validateInputWithRegex(password,passwordRegex);
            validateInputWithRegex(confPassword, passwordRegex);
        } else {
            confPassword.css('border', 'solid red');
            password.css('border', 'solid red');
            isAllValid = false;
        }
        if(companyCheckbox.is(':checked')){
            validateCompanyInfo();
        }

    }
    function validateCompanyInfo() {
        let companyNumberValue = +companyNumber.val();
        if(companyNumberValue >= 1000 && companyNumberValue <=9999){
            companyNumber.css('border', 'none')
        } else {
            companyNumber.css('border', 'solid red');
            isAllValid = false;
        }
    }
    function validateInputWithRegex(input, regex) {
        if(regex.test(input.val())){
            input.css('border', 'none')
        } else {
            input.css('border', 'solid red')
            isAllValid = false;
        }
    }
}

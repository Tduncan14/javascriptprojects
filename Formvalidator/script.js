const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input Error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

    const small = formControl.querySelector('small');
    small.innerText = message
}



function emailValidate(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);

}





//Event Listener
form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('submit')



    if (username.value !== '') {
        showSuccess(username, 'success');

    }
    else {
        showError(username, 'Username is required')
    }




    if (email.value === '') {

        showError(email, 'Email is required')
    }


    else if (!emailValidate(email.value)) {

        showError(email, 'Email needs to be an real email')
    }
    else {
        showSuccess(email, 'success');
    }


    // password area

    let passwordMe

    if (password.value !== '' && password.value.split('').length > 5) {

        showSuccess(password, 'success')
    }


    else {

        showError(password, ' password needs to be longer than 5 letters')
    }




    if (password2.value === '') {

        showError(password2, 'password is required')
    }


    else if (password.value !== password2.value) {

        showError(password2, 'password needs to match')
    }
    else {
        showSuccess(password2, 'success');
    }





})
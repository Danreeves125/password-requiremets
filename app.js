const passwordInput = document.getElementById('password'),
      passMin = document.getElementById('password-length').getAttribute('data-min'),
      passMax = document.getElementById('password-length').getAttribute('data-max'),
      checkUppercase = new RegExp('[A-Z]'),
      checkLowercase = new RegExp('[a-z]'),
      checkForNumbers = new RegExp('[0-9]');

document.querySelector('.require__list-item').textContent = `Between ${passMin} - ${passMax} Characters`;

passwordInput.addEventListener('input', function(){
    const inputValue = passwordInput.value;
    checkLength(inputValue);
    checkValueForUppercase(inputValue);
    checkValueForLowercase(inputValue);
    checkValueForNumber(inputValue);
    checkValueForSpaces(inputValue);
});

document.getElementById('show-password').addEventListener('click', showPassword);

function showPassword() {
    const showPassIcon = document.getElementById('show-password'),
          changePasswordAttr = document.getElementById('password');

    if(document.getElementById('password').getAttribute('data-show-password') === 'false') {
        showPassIcon.classList.add('active');

        changePasswordAttr.removeAttribute('type');
        changePasswordAttr.setAttribute('type', 'text');

        changePasswordAttr.removeAttribute('data-show-password');
        changePasswordAttr.setAttribute('data-show-password', 'true');
    } else {
        showPassIcon.classList.remove('active');

        changePasswordAttr.removeAttribute('type');
        changePasswordAttr.setAttribute('type', 'password');

        changePasswordAttr.removeAttribute('data-show-password');
        changePasswordAttr.setAttribute('data-show-password', 'false');
    }

}

function checkLength(value) {
    if(value.length > passMin && value.length < passMax) {
        document.getElementById('password-length').classList.add('condition-met');
    } else {
        document.getElementById('password-length').classList.remove('condition-met');
    }
}

function checkValueForUppercase(value) {
    if(value.match(checkUppercase)) {
        document.getElementById('uppercase').classList.add('condition-met');
    } else {
        document.getElementById('uppercase').classList.remove('condition-met');
    }
}

function checkValueForLowercase(value) {
    if(value.match(checkLowercase)) {
        document.getElementById('lowercase').classList.add('condition-met');
    } else {
        document.getElementById('lowercase').classList.remove('condition-met');
    }
}

function checkValueForNumber(value) {
    if(value.match(checkForNumbers)) {
        document.getElementById('number').classList.add('condition-met');
    } else {
        document.getElementById('number').classList.remove('condition-met');
    }
}

function checkValueForSpaces(value) {
    if(value.indexOf(' ') >= 0) {
        document.getElementById('space').classList.remove('condition-met');
    } else {
        document.getElementById('space').classList.add('condition-met');
    }
}
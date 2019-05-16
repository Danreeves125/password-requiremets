const passwordInput = document.getElementById('password'),
      passMin = document.getElementById('password-length').getAttribute('data-min'),
      passMax = document.getElementById('password-length').getAttribute('data-max'),
      checkUppercase = new RegExp('[A-Z]'),
      checkLowercase = new RegExp('[a-z]'),
      checkForNumbers = new RegExp('[0-9]');

document.querySelector('.require__list-item').textContent = `${passMin} - ${passMax} Characters`;

passwordInput.addEventListener('input', function(){
    const inputValue = passwordInput.value;

    checkLength(inputValue);
    checkValueForUppercase(inputValue);
    checkValueForLowercase(inputValue);
    checkValueForNumber(inputValue);
    checkValueForSpaces(inputValue);
});

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
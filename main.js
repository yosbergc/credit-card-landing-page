const nameInput = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
const cardNumberInput = document.querySelector('#card-number-input');
const cardError = document.querySelector('.card-error');
const monthExpireInput = document.querySelector('#MM');
const monthError = document.querySelector('.month-error');
const yearExpireInput = document.querySelector('#YY');
const yearError = document.querySelector('.year-error');
const cvcInput = document.querySelector('#cvc');
const cardNumberPreview = document.querySelector('.card-number');
const cardNamePreview = document.querySelector('.card-name');
const expireMonthPreview = document.querySelector('.month');
const expireYearPreview = document.querySelector('.year');
const secretCodePreview = document.querySelector('.secret-code-card');
const cvvError = document.querySelector('.cvv-error');
const confirmButton = document.querySelector('.confirmButton');
const cardForm = document.querySelector('.card-form');
const cardPreviewContainer = document.querySelector('.card-preview');
const lastPage = document.querySelector('.added-details')
confirmButton.addEventListener('click', checkInfo);

function checkInfo() {
    let name;
    let cardNumber;
    let monthExpire;
    let yearExpire;
    let cvc;

    if (nameInput.value.trim().length == 0) {
        nameInput.classList.add('errorInput');
        nameError.innerHTML = "Can't be blank";
        nameError.classList.remove('hide');
        name = false;
    } else {
        nameInput.classList.remove('errorInput');
        nameError.classList.add('hide');
        name = true;
    }

    if (cardNumberInput.value.length == 0) {
        cardNumberInput.classList.add('errorInput');
        cardError.innerHTML = "Can't be blank";
        cardError.classList.remove('hide');
        cardNumber = false;
    } else if (cardNumberInput.value.length < 16) {
        cardNumberInput.classList.add('errorInput');
        cardError.innerHTML = "Invalid Card Number";
        cardError.classList.remove('hide');
        cardNumber = false;
    } else {
        cardNumberInput.classList.remove('errorInput');
        cardError.classList.add('hide');
        cardNumber = true;
    }

    if (monthExpireInput.value.length == 0) {
        monthExpireInput.classList.add('errorInput');
        monthError.innerHTML = "Can't be blank";
        monthError.classList.remove('hide')
        monthExpire = false;
    } else if (monthExpireInput.value > 12 || monthExpireInput.value < 1) {
        monthExpireInput.classList.add('errorInput');
        monthError.innerHTML = "Wrong month";
        monthError.classList.remove('hide');
        monthExpire = false;
    } else {
        monthExpireInput.classList.remove('errorInput');
        monthError.classList.add('hide');
        monthExpire = true;
    }

    if (yearExpireInput.value.length == 0) {
        yearExpireInput.classList.add('errorInput');
        yearError.innerHTML = "Can't be blank";
        yearError.classList.remove('hide');
        yearExpire = false;
    } else if (yearExpireInput < 23 || yearExpireInput > 99) {
        yearExpireInput.classList.add('errorInput');
        yearError.innerHTML = "Wrong year";
        yearError.classList.remove('hide');
        yearExpire = false;
    } else {
        yearExpireInput.classList.remove('errorInput');
        yearError.classList.add('hide');
        yearExpire = true;
    }

    if (cvcInput.value.length == 0) {
        cvcInput.classList.add('errorInput');
        cvvError.innerHTML = "Can't be blank";
        cvvError.classList.remove('hide');
        cvc = false;
    } else if (cvcInput.value.length < 3) {
        cvcInput.classList.add('errorInput');
        cvvError.innerHTML = "Insert a correct CVV";
        cvvError.classList.remove('hide');
        cvc = false;
    } else {
        cvcInput.classList.remove('errorInput');
        cvvError.classList.add('hide');
        cvc = true;
    }

    if (name && cardNumber && monthExpire && yearExpire && cvc) {
        cardForm.classList.add('hide');
        lastPage.classList.remove('hide');
    }
}
nameInput.addEventListener('input', () => {
    cardNamePreview.innerHTML = nameInput.value;
})
cardNumberInput.addEventListener('input', () => {
    cardNumberInput.value = cardNumberInput.value.slice(0,16);
    let numeroObtenido = formatearTarjetaCredito(cardNumberInput.value)
    cardNumberPreview.innerHTML = numeroObtenido;

})
cvcInput.addEventListener('input', () => {
    cvcInput.value = cvcInput.value.slice(0,3)
    secretCodePreview.innerHTML = cvcInput.value;
})
monthExpireInput.addEventListener('input', () => {
    monthExpireInput.value = monthExpireInput.value.slice(0,2)
    expireMonthPreview.innerHTML = monthExpireInput.value;
})
yearExpireInput.addEventListener('input', () => {
    yearExpireInput.value = yearExpireInput.value.slice(0,2);
    expireYearPreview.innerHTML = yearExpireInput.value;
})
function formatearTarjetaCredito(numeroTarjeta) {
    let arrayVacio = [];
    for (let i = 0; i < numeroTarjeta.length; i = i + 4) {
        arrayVacio.push(numeroTarjeta.slice(i, i + 4));
    }
    return arrayVacio.join(" ");
}
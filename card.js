var nameHolder = document.getElementById('name');
var number = document.getElementById('number');
var cvc = document.getElementById('cvc');

var cardName = document.getElementById('holder-name');
var cardNumber = document.getElementById('cardNumber');
var cardCvc = document.getElementById('cardCvc');



const regex = /^(?:5[1-5][0-9]{14})$/;
const namePattern = /^[a-zA-Z ]+$/;
const cvcRegex = /^[0-9]{3,4}$/;

nameHolder.addEventListener('keyup', (e) => {
    cardName.value = nameHolder.value;
    if (!namePattern.test(nameHolder.value)) {
        nameHolder.style.borderColor = "red";
    } else {
        nameHolder.style.borderColor = "green";
    }
})


number.addEventListener('keyup', (e) => {
    const formatNumber = (value) => value.split('').reduce((prev, next, index) => {
        if (index !== 0 && (index % 4 == 0)) prev += " ";
        return prev + next;
    }, "");

    number.value = formatNumber(number.value.replaceAll(" ", ""))
    cardNumber.value = number.value;
    const validatedNumber = formatNumber(number.value.replaceAll(" ", "")).replaceAll(" ", "");
    if (regex.test(validatedNumber)) {
        number.style.borderColor = "green";
        number.parentElement.classList.remove('wrong');
    } else {
        cardNumber.value = '';
        number.style.borderColor = "red";
        number.parentElement.classList.add('wrong');
    }
    e.preventDefault();

})

cvc.addEventListener('keyup', (e) => {
    cardCvc.value = cvc.value;
    if (cvcRegex.test(cvc.value)) {
        cvc.style.borderColor = 'green';
        cvc.parentElement.classList.remove('wrongcvc');
    } else {
        cvc.style.borderColor = 'red';
        cvc.parentElement.classList.add('wrongcvc');
    }
})

console.log(cvc.parentElement)
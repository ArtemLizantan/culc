// Импорт прайсформат

import {
    priceFormatter
} from "./formatters.js";

import {
    persentFormatter
} from "./formatters.js";


import {
    priceFormatterDecimals
} from './formatters.js';



// Нахождение инпутов

const inputCost = document.querySelector('#input-cost');

const inputDownPayment = document.querySelector('#input-downpayment');

const inputTerm = document.querySelector('#input-term');

const form = document.querySelector('#form');

const totalCost = document.querySelector('#total-cost');

const totalMonthPayment = document.querySelector('#total-month-payment');

// Cleave настройки форматирования

const cleavePriceSettings = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' ',

};



// Cleave форматирование чисел 4 800 00
const cleaveCost = new Cleave('#input-cost', cleavePriceSettings);

const cleaveDownPayment = new Cleave('#input-downpayment', cleavePriceSettings);

const cleaveTerm = new Cleave('#input-term', cleavePriceSettings);

const cleaveTotalCost = new Cleave('#total-month-payment', cleavePriceSettings);




// Вызов функции расчета ипотеки мортайдж,для того,что бы при старте уже было число

calcMortgage()

form.addEventListener('input', function () {

    // Вызов функции расчета ипотеки мортайдж

    calcMortgage()

})



function calcMortgage() {
    // Расчет суми кредита 

    const totalAmount = +cleaveCost.getRawValue() - cleaveDownPayment.getRawValue();

    totalCost.innerText = priceFormatter.format(totalAmount);

    // Ставка по кредиту 
    const creditRate = +document.querySelector('input[name = "program"]:checked').value;
    const monthsRate = (creditRate * 100) / 12;

    // Срок ипотеки 

    const years = +cleaveTerm.getRawValue();
    const months = years * 12;



    // рассчет по формуле ежемясчнего платежа


    const monthsPayment = (totalAmount * monthsRate) / (1 - (1 + monthsRate) * (1 - months));

    // Передаем значение на Html страницу


    totalMonthPayment.innerText = priceFormatterDecimals.format(monthsPayment);
    console.log(typeof monthsPayment);
}

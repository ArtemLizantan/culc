import {
    persentFormatter
} from "./formatters.js";



// Ставки по ипотеке

const programBase = 0.12;

const programIt = 0.047;

const programGov = 0.067;

const programZero = 0.108;

// Указываем ставку в радиокнопках

document.querySelector('#base-value').value = programBase;

document.querySelector('#it-value').value = programIt;

document.querySelector('#gov-value').value = programGov;

document.querySelector('#zero-value').value = programZero;

// Указываем ставку в спанах

document.querySelector('#base-text').innerText = persentFormatter.format(programBase);

document.querySelector('#it-text').innerText = persentFormatter.format(programIt);

document.querySelector('#gov-text').innerText = persentFormatter.format(programGov);

document.querySelector('#zero-text').innerText = persentFormatter.format(programZero);


// Отображение выбраного процентой ставки справа


// Нашли инпуты и элемент справа,куда передавать данные .Далее мы методом форич добавили к инпутам прослушивание на клик ,и с помощью функции добавили к тоталперсент иннертекст

const programInputs = document.querySelectorAll('input[name = "program"]');

const totalPersent = document.querySelector('#total-percent');



programInputs.forEach((input) => {
    // Отображение ставки при загрузки страницы
    if (input.checked) {
        totalPersent.innerText = persentFormatter.format(input.value);
    }


    // Отображение ставки при переключении инпута
    input.addEventListener('click', function () {
        totalPersent.innerText = persentFormatter.format(this.value);
    })
})


const itValue = document.querySelector('#it-value');
const itButton = document.querySelector('.radio-label');


itValue.addEventListener('click', function () {
    itButton .classList.add('active');
})
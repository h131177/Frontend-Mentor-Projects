"use strict"

//inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const inputs = [day, month, year];
console.log(inputs);

//lables
const labels = document.getElementsByTagName("label");
console.log(labels);

//error messages
const errorMessages = document.querySelector(".top").getElementsByTagName("p");
console.log(errorMessages);

//data-spans
const days = document.querySelector("[data-days]");
const months = document.querySelector("[data-months]");
const years = document.querySelector("[data-years]");
const dataSpans = [days, months, years];
console.log(dataSpans);

const button = document.querySelector("button");

function calculate(input, i) {
    let label;
    if(i === 0) {
        label = "day";
    } else if(i === 1) {
        label = "month";
    } else {
        label = "year";
    }

    if(input.value.trim() == "") {
        input.classList.add('invalidInput');
        labels[i].classList.add('error');
        errorMessages[i].classList.remove('hidden');
    } else if(validate(input, i)) {
        errorMessages[i].textContent = "Must be a valid " + label;
        input.classList.add('invalidInput');
        labels[i].classList.add('error');
        errorMessages[i].classList.remove('hidden');
    } else {
        days.textContent = 26;
        months.textContent = 3;
        years.textContent = 38;
        input.classList.remove('invalidInput');
        labels[i].classList.remove('error');
        errorMessages[i].classList.add('hidden');
    }
}

function validate(input, i) {
    let notValid = false;
    let upper;
    if(i === 0) {
        upper = 31;
    } else if(i === 1) {
        upper = 12;
    } else {
        upper = new Date().getFullYear();
    }
    if(input.value < 1 || input.value > upper) {
        notValid = true;
    }
    return notValid;
}

function start() {
    for(let i=0; i < inputs.length; i++) {
        calculate(inputs[i], i);
    }
}

button.addEventListener('click', start);

/*
The year is in the future
The date is invalid e.g. 31/04/1991 (there are 30 days in April)
*/
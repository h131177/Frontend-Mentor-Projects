"use strict"

//inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

//lables
const dayLabel = document.querySelector(".day label");
const monthLabel = document.querySelector(".month label");
const yearLabel = document.querySelector(".year label");

//error messages
const errorDay = document.querySelector(".day p");
const errorMonth = document.querySelector(".month p");
const errorYear = document.querySelector(".year p");

//data-spans
const days = document.querySelector("[data-days]");
const months = document.querySelector("[data-months]");
const years = document.querySelector("[data-years]");

const button = document.querySelector("button");

function calculate() {
    let invalidInput = false;
    if(day.value.trim() == "") {
        day.classList.add('invalidInput');
        dayLabel.classList.add('error');
        errorDay.classList.remove('hidden');
    } else if(day.value < 1 || day.value > 31) {
        errorDay.textContent = "Must be a valid day";
    } else {
        days.textContent = 26;
        months.textContent = 3;
        years.textContent = 38;
        day.classList.remove('invalidInput');
        dayLabel.classList.remove('error');
        errorDay.classList.add('hidden');
    }
}

button.addEventListener('click', calculate);

/*
Any field is empty when the form is submitted
The day number is not between 1-31
The month number is not between 1-12
The year is in the future
The date is invalid e.g. 31/04/1991 (there are 30 days in April)
*/
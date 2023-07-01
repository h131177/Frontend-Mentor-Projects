"use strict"

//inputs
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

//lables
const dayLabel = document.querySelector(".day label");

const button = document.querySelector("button");

function calculate() {
    let invalidInput = false;
    if(day.value.trim() == "") {
        day.classList.add('invalidInput');
        dayLabel.classList.add('red');
    } else {
        day.classList.remove('invalidInput');
        dayLabel.classList.remove('red');
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
"use strict"

const billInput = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");

let bill = 0;
let number = 0;
let tip = 0;
let tipAmount = 0;
let total = 0;

function select(e) {
    //Deselect all first
    console.log("You selected tip %");
    tip = e.target.textContent;
    tip = tip.replace("%", "");
    tip /= 100;
    e.target.style.background = "hsl(172, 67%, 45%)";
}

function calculate() {
    console.log("Calculate tip amount and total bill");
}

function reset() {
    console.log("reset all");
}

const fivePercent = document.querySelector(".select div:nth-child(1)");
const tenPercent = document.querySelector(".select div:nth-child(2)");
const fifteenPercent = document.querySelector(".select div:nth-child(3)");
const twentyfivePercent = document.querySelector(".select div:nth-child(4)");
const fiftyPercent = document.querySelector(".select div:nth-child(5)");

fivePercent.addEventListener('click', select);
tenPercent.addEventListener('click', select);
fifteenPercent.addEventListener('click', select);
twentyfivePercent.addEventListener('click', select);
fiftyPercent.addEventListener('click', select);

billInput.addEventListener('change', calculate);
people.addEventListener('change', calculate);
custom.addEventListener('change', calculate);

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', reset);
"use strict"

const adviceNumber = document.querySelector(".adviceNumber span");
const adviceText = document.querySelector(".advice");
const dice = document.querySelector(".dice");

async function requestAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {method: "GET"});
        console.log(response);
        response.json().then(data => {
            console.log(data.slip.advice);
            const text = data.slip.advice;
            adviceNumber.textContent = data.slip.id;
            adviceText.textContent = text;
        });
        
    } catch (error) {
        console.log(error.message);
    }
}

dice.addEventListener('click', requestAdvice);
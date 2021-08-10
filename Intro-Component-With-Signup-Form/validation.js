"use strict"



const p1 = document.querySelector("form p:nth-child(2)");
const p2 = document.querySelector("form p:nth-child(4)");
const p3 = document.querySelector("form p:nth-child(6)");
const p4 = document.querySelector("form p:nth-child(8)");

function validate() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(firstName == "") {
        p1.classList.toggle("hidden");
    }
    if(lastName == "") {
        p2.classList.toggle("hidden");
    }
    if(email == "") {
        p3.classList.toggle("hidden");
    }
    if(password == "") {
        p4.classList.toggle("hidden");
    }
   
}

const button = document.querySelector(".button");
button.addEventListener('click', validate);
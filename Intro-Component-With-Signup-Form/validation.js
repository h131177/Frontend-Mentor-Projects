"use strict"



const p1 = document.querySelector("form p:nth-child(2)");
const p2 = document.querySelector("form p:nth-child(4)");
const p3 = document.querySelector("form p:nth-child(6)");
const p4 = document.querySelector("form p:nth-child(8)");

function validate() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(firstName.value == "") {
        p1.classList.remove("hidden");
        firstName.style.border = "3px solid hsl(0, 100%, 74%)";
        firstName.style.background = "url(./images/icon-error.svg) 90% 50% no-repeat";
    } else {
        p1.classList.add("hidden");
        firstName.style.border = "";
        firstName.style.background = "";
    }
    if(lastName.value == "") {
        p2.classList.remove("hidden");
        lastName.style.border = "3px solid hsl(0, 100%, 74%)";
        lastName.style.background = "url(./images/icon-error.svg) 90% 50% no-repeat";
    } else {
        p2.classList.add("hidden");
        lastName.style.border = "";
        lastName.style.background = "";
    }
    if(email.value == "") {
        p3.classList.remove("hidden");
        email.style.border = "3px solid hsl(0, 100%, 74%)";
        email.style.background = "url(./images/icon-error.svg) 90% 50% no-repeat";
    } else {
        p3.classList.add("hidden");
        email.style.border = "";
        email.style.background = "";
    }
    if(password.value == "") {
        p4.classList.remove("hidden");
        password.style.border = "3px solid hsl(0, 100%, 74%)";
        password.style.background = "url(./images/icon-error.svg) 90% 50% no-repeat";
    } else {
        p4.classList.add("hidden");
        password.style.border = "";
        password.style.background = "";
    }
   
}

const button = document.querySelector(".button");
button.addEventListener('click', validate);
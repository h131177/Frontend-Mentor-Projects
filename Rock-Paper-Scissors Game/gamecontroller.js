"use strict"
class GameController {

    constructor(rootID) {
        this.rootID = rootID;
        this.score = 0;
        this.choice = '';
        this.computerChoice = '';

        this.run = this.run.bind(this);
        this.play = this.play.bind(this);
        this.playAgain = this.playAgain.bind(this);
        this.playComputer = this.playComputer.bind(this);
        this.findWinner = this.findWinner.bind(this);
        this.toggleElements = this.toggleElements.bind(this);
    }

    run() {
        this.rootElement = document.getElementById(this.rootID);
        this.rootElement.querySelector(".playground img:nth-child(2)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").addEventListener("click", this.play);
        this.rootElement.querySelector(".result button").addEventListener("click", this.playAgain);
    }

    play(e) {
        console.log("Playing");
        //Get your choice
        //console.log('You: ' + e.path[0].alt);
        this.choice = e.target.getAttribute("alt");
        console.log('You: ' + e.target.getAttribute("alt"));

        //Get computer choice
        this.computerChoice = this.playComputer();
        console.log('Computer: ' + this.computerChoice);

        //toggle hidden class
        this.toggleElements();

        //Switch some css styling
        const playground = this.rootElement.querySelector(".playground");
        playground.style.gridAutoRows = "minmax(auto, 190px)";
        playground.style.marginBottom = "0px";

        //Add correct styling (choice and color)
        const p2 = this.rootElement.querySelector(".playground img:nth-child(2)");
        const p3 = this.rootElement.querySelector(".playground img:nth-child(3)");

        p2.src = choiceInfo.get(this.choice).image;
        p2.style.borderColor = choiceInfo.get(this.choice).color;
        p2.setAttribute("alt", this.choice);
        p3.src = choiceInfo.get(this.computerChoice).image;
        p3.style.borderColor = choiceInfo.get(this.computerChoice).color;
        p3.setAttribute("alt", this.computerChoice);

        //Update score
        this.score += this.findWinner();
        if(this.score < 0) {
            this.score = 0;
        }
        this.rootElement.querySelector(".score [data-score]").textContent = this.score;
        
        checkViewportOver960px(x); // Call listener function at run time
        x.addEventListener("change", checkViewportOver960px); // Attach listener function on state changes

        //Remove/disable click listeners
        this.rootElement.querySelector(".playground img:nth-child(2)").removeEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").removeEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").removeEventListener("click", this.play);
    }

    playAgain() {
        console.log("Play again");
        this.toggleElements();

        checkViewportOver960px(x); // Call listener function at run time
        x.removeEventListener("change", checkViewportOver960px); // Remove listener function on state changes

        //Switch back again some css styling
        const playground = this.rootElement.querySelector(".playground");
        playground.style.gridAutoRows = "";
        playground.style.marginBottom = "";
        playground.style.maxWidth = "";

        //Add correct styling (choice and color)
        const p2 = this.rootElement.querySelector(".playground img:nth-child(2)");
        const p3 = this.rootElement.querySelector(".playground img:nth-child(3)");

        p2.src = choiceInfo.get('paper').image;
        p2.setAttribute("alt", "paper");
        p2.style.borderColor = "";
        p2.style.alignSelf = "";
        p3.src = choiceInfo.get('scissors').image;
        p3.setAttribute("alt", "scissors");
        p3.style.borderColor = "";
        p3.style.alignSelf = "";

        //Enable click again
        this.rootElement.querySelector(".playground img:nth-child(2)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").addEventListener("click", this.play);
    }

    playComputer() {
        let computer;
        let number = Math.floor(Math.random() * 3);
        if(number == 0) {
            computer = 'paper';
        } else if(number == 1) {
            computer = 'scissors';
        } else {
            computer = 'rock';
        }
        console.log(number);
        return computer;
    }

    findWinner() {
        let result = 'YOU WIN';
        let scorePoints;
        //add a switch statement here
        switch(this.choice) {
            case 'paper':
                if(this.computerChoice == 'rock') {
                    result = 'YOU WIN';
                    scorePoints = 1;
                } else if(this.computerChoice == 'scissors') {
                    result = 'YOU LOSE';
                    scorePoints = -1;
                } else {
                    result = 'TIE';
                    scorePoints = 0;
                }
                break;
            case 'scissors':
                if(this.computerChoice == 'paper') {
                    result = 'YOU WIN';
                    scorePoints = 1;
                } else if(this.computerChoice == 'rock') {
                    result = 'YOU LOSE';
                    scorePoints = -1;
                } else {
                    result = 'TIE';
                    scorePoints = 0;
                }
                break;
            case 'rock':
                if(this.computerChoice == 'scissors') {
                    result = 'YOU WIN';
                    scorePoints = 1;
                } else if(this.computerChoice == 'paper') {
                    result = 'YOU LOSE';
                    scorePoints = -1;
                } else {
                    result = 'TIE';
                    scorePoints = 0;
                }
                break;

        }
        this.rootElement.querySelector(".result [data-result]").textContent = result;
        return scorePoints;
    }

    toggleElements() {
        const triangle = this.rootElement.querySelector(".playground .triangle");
        triangle.classList.toggle("hidden");
        const p5 = this.rootElement.querySelector(".playground p:nth-child(5)");
        p5.classList.toggle("hidden");
        const p6 = this.rootElement.querySelector(".playground p:nth-child(6)");
        p6.classList.toggle("hidden");
        const rock = this.rootElement.querySelector(".playground img:nth-child(4)");
        rock.classList.toggle("hidden");
        const resultDiv = this.rootElement.querySelector(".result");
        resultDiv.classList.toggle("hidden");
    }
}

import {choiceInfo} from './map.js'

const controller = new GameController("root");

document.addEventListener("DOMContentLoaded", controller.run);

const playGround = document.querySelector(".playground");
const play2 = document.querySelector(".playground img:nth-child(2)");
const play3 = document.querySelector(".playground img:nth-child(3)");

//Adds a listener for viewport over 960px
const x = window.matchMedia("(min-width: 960px)");

//function to check viewport size
function checkViewportOver960px(x) {
    if (x.matches) { // If media query matches
        playGround.style.maxWidth = "520px";
        play2.style.alignSelf = "flex-end";
        play3.style.alignSelf = "flex-end";
    } else {
        playGround.style.maxWidth = "360px";
        play2.style.alignSelf = "flex-start";
        play3.style.alignSelf = "flex-start";
    }
}
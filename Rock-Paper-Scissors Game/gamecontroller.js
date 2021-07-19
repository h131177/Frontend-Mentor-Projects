"use strict"
class GameController {

    constructor(rootID) {
        this.rootID = rootID;

        this.run = this.run.bind(this);
        this.play = this.play.bind(this);
        this.playAgain = this.playAgain.bind(this);
        this.playComputer = this.playComputer.bind(this);
        this.findWinner = this.findWinner.bind(this);
    }

    run() {
        this.rootElement = document.getElementById(this.rootID);
        this.rootElement.querySelector(".playground img:nth-child(2)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").addEventListener("click", this.play);
    }

    play(e) {
        console.log("Playing");
        //Get your choice
        console.log('You: ' + e.path[0].alt);
        const choice = e.path[0].alt;

        //Get computer choice
        const computerChoice = this.playComputer();
        console.log('Computer: ' + computerChoice);

        this.findWinner();

        //toggle hidden class
        const triangle = this.rootElement.querySelector(".playground .triangle");
        triangle.classList.toggle("hidden");
        const p1 = this.rootElement.querySelector(".playground p:nth-child(5)");
        p1.classList.toggle("hidden");
        const p2 = this.rootElement.querySelector(".playground p:nth-child(6)");
        p2.classList.toggle("hidden");
        const rock = this.rootElement.querySelector(".playground img:nth-child(4)");
        rock.classList.toggle("hidden");
        const resultDiv = this.rootElement.querySelector(".result");
        resultDiv.classList.toggle("hidden");

        //Switch some css styling
        const playground = this.rootElement.querySelector(".playground");
        playground.style.gridAutoRows = "minmax(auto, 190px)";
        playground.style.marginBottom = "0px";
    }

    playAgain() {
        console.log("Play again");
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
        //add a switch statement here
        this.rootElement.querySelector(".result [data-result]").textContent = result;
    }
}

import {choiceInfo} from './map.js'

const controller = new GameController("root");

document.addEventListener("DOMContentLoaded", controller.run);
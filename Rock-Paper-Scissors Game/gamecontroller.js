"use strict"
class GameController {

    constructor(rootID) {
        this.rootID = rootID;

        this.run = this.run.bind(this);
        this.play = this.play.bind(this);
        this.playAgain = this.playAgain.bind(this);
        this.playComputer = this.playComputer.bind(this);
    }

    run() {
        this.rootElement = document.getElementById(this.rootID);
        this.rootElement.querySelector(".playground img:nth-child(2)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").addEventListener("click", this.play);
    }

    play(e) {
        console.log("Playing");
        console.log('You: ' + e.path[0].alt);
        const choice = e.path[0].alt;
        const computerChoice = this.playComputer();
        console.log('Computer: ' + computerChoice);
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
}

import {choiceInfo} from './map.js'

const controller = new GameController("root");

document.addEventListener("DOMContentLoaded", controller.run);
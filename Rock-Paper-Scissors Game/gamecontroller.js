"use strict"
class GameController {

    constructor(rootID) {
        this.rootID = rootID;

        this.run = this.run.bind(this);
        this.play = this.play.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    run() {
        this.rootElement = document.getElementById(this.rootID);
        this.rootElement.querySelector(".playground img:nth-child(2)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(3)").addEventListener("click", this.play);
        this.rootElement.querySelector(".playground img:nth-child(4)").addEventListener("click", this.play);
    }

    play() {
        console.log("Playing");
    }

    playAgain() {
        console.log("Play again");
    }
}

import {choiceInfo} from './map.js'

const controller = new GameController("root");

document.addEventListener("DOMContentLoaded", controller.run);
console.log('Hello Kje');
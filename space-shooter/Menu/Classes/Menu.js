import { menu, headline } from "../../main.js";

class Menu {

    name;

    constructor(name) {
        this.name = name;
    }

    clearMenu() {

        const button = document.querySelector("#go-back");
        const canvas = document.querySelector(".canvas");
        const gameOverScreen = document.querySelector("#game-over-screen");
        const saveScoreBox = document.querySelector("#save-score-box");
        const livesCounter = document.querySelector("#lives-count");
        const score = document.querySelector("#score-count");
        const pauseFlasher =document.querySelector("#pause-flasher");
        headline.textContent = "";

        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }

        if (button) {
            document.body.removeChild(button);
            
        }

        if (canvas) {
            document.body.removeChild(canvas);
            
        }

        if (gameOverScreen) {
            const elements = [gameOverScreen, livesCounter, score, pauseFlasher];
            for (const element of elements) {
                document.body.removeChild(element);
            }
            headline.removeAttribute("id");

        }

        if (saveScoreBox) {
            document.body.removeChild(saveScoreBox);
        }

    }

}

export { Menu };
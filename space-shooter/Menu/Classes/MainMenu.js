import { menu, headline, mainMenu, controlsMenu, scoreboardMenu, setupGameMenu, optionsMenu } from "../../main.js";
import { Menu } from "./Menu.js";

class MainMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        const play = document.querySelector("#play");
        headline.textContent = "Space Battle";
        if (play) {
        menu.removeChild(play);
        
        }

        const startBtn = document.createElement("button");
        const contrlBtn = document.createElement("button");
        const scoreBtn = document.createElement("button");
        const optBtn = document.createElement("button");

        startBtn.setAttribute("id", "start-game");
        contrlBtn.setAttribute("id", "controls");
        scoreBtn.setAttribute("id", "scoreboard");
        optBtn.setAttribute("id", "options");

        startBtn.textContent = "Start game";
        contrlBtn.textContent = "Controls";
        scoreBtn.textContent = "Scoreboard";
        optBtn.textContent = "Options";

        const elements = [startBtn, contrlBtn, scoreBtn, optBtn];

        for (const element of elements) {
            element.setAttribute("class", "menu-button");
            menu.appendChild(element);
        }

        startBtn.addEventListener("click", () => {
            mainMenu.clearMenu();
            setupGameMenu.setupMenu();
        });
        
        contrlBtn.addEventListener("click", () => {
            mainMenu.clearMenu();
            controlsMenu.setupMenu();
        });

        scoreBtn.addEventListener("click", () => {
            mainMenu.clearMenu();
            scoreboardMenu.setupMenu();
        });

        optBtn.addEventListener("click", () => {
            mainMenu.clearMenu();
            optionsMenu.setupMenu();
        });

    }
};

export { MainMenu };

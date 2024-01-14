import { Menu } from "./Menu.js";
import { headline, menu, menuMusic, gameDisplay, clearAnyMenu, drawGame } from "../../main.js";
//import { clearAnyMenu } from "../Functions/clearAnyMenu.js";
//import { drawGame } from "../../Canvas/Functions/drawGame.js";

class SetupGameMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Setup game";

        const difficulty = document.createElement("button");
        const specialBlocks = document.createElement("button");
        const playGame = document.createElement("button");
        const backBtn = document.createElement("button");

        difficulty.setAttribute("id", "difficulty-setting");
        specialBlocks.setAttribute("id", "special-blocks-setting");
        playGame.setAttribute("id", "play-game-button");
        backBtn.setAttribute("id", "go-back");

        difficulty.setAttribute("class", "menu-button");
        specialBlocks.setAttribute("class", "menu-button");
        playGame.setAttribute("class", "menu-button");

        difficulty.textContent = "Difficulty EASY";
        specialBlocks.textContent = "Special Blocks ON";
        playGame.textContent = "Play game";
        backBtn.textContent = "⬅️";
        
        const diffDescription = document.createElement("p");
        const specDiscription = document.createElement("p");

        diffDescription.setAttribute("id", "difficulty-description");
        specDiscription.setAttribute("id", "special-blocks-description");

        diffDescription.setAttribute("class", "description");
        specDiscription.setAttribute("class", "description");

        diffDescription.textContent = "This is an EASY mode";
        specDiscription.textContent = "Special Blocks are ON";

        document.body.appendChild(backBtn);
        menu.appendChild(difficulty);
        menu.appendChild(diffDescription);
        menu.appendChild(specialBlocks);
        menu.appendChild(specDiscription);
        menu.appendChild(playGame);

        difficulty.addEventListener("click", () => {
            
            const diffLevel = difficulty.textContent;

            switch (diffLevel) {

                case "Difficulty EASY":
                    difficulty.textContent = "Difficulty MEDIUM";
                    diffDescription.textContent = "This is an MEDIUM mode";
                    //Miejsce na funckję zmienijącą poziom trudności
                    break;

                case "Difficulty MEDIUM":
                    difficulty.textContent = "Difficulty HARD";
                    diffDescription.textContent = "This is an HARD mode";
                    //Miejsce na funckję zmienijącą poziom trudności
                    break;

                case "Difficulty HARD":
                    difficulty.textContent = "Difficulty EASY";
                    diffDescription.textContent = "This is an EASY mode";
                    //Miejsce na funckję zmienijącą poziom trudności
                    break;
            }
        });

        specialBlocks.addEventListener("click", () => {
            if (specialBlocks.textContent === "Special Blocks ON") {
                specialBlocks.textContent = "Special Blocks OFF";
                specDiscription.textContent = "Special Blocks are OFF";

                //Miejsce na funkcję osługującą bloki specjalne
            } else {
                specialBlocks.textContent = "Special Blocks ON";
                specDiscription.textContent = "Special Blocks are ON";

                //Miejsce na funkcję osługującą bloki specjalne
            }
        });

        playGame.addEventListener("click", () => {
            menuMusic.pause();
            gameDisplay.setupScreen();
            drawGame();

        });

        backBtn.addEventListener("click", clearAnyMenu);
        

    }

};

export { SetupGameMenu };

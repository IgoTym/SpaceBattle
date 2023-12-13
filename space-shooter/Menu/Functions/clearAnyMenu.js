import { headline, mainMenu, setupGameMenu, controlsMenu, scoreboardMenu, optionsMenu } from "../../main.js";

function clearAnyMenu() {
    const headName = headline.textContent;

    switch (headName) {

        case "Setup game":
            setupGameMenu.clearMenu();
            break;

        case "Controls":
            controlsMenu.clearMenu();
            break;

        case "Scoreboard":
            scoreboardMenu.clearMenu();
            break;
        
        case "Options":
            optionsMenu.clearMenu();
            break;
        
        //Placeholder for Game Screen case
    }

    mainMenu.setupMenu();
}

export { clearAnyMenu };
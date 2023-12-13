//Notatki

/* Następne kroki:
- ogarnąć działającą tablicę wyników


*/

//CLASSES

//Menu Classes

class Menu {

    name;

    constructor(name) {
        this.name = name;
    }

    clearMenu() {

        headline.textContent = "";

        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }

        if (goBack !== 0) {
        document.body.removeChild(goBack);
        goBack = 0;
        }
    }

}

class MainMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Space Battle";
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

        startGame = document.querySelector("#start-game");
        controls = document.querySelector("#controls");
        scoreboard = document.querySelector("#scoreboard");
        options = document.querySelector("#options");

        startGame.addEventListener("click", () => {
            mainMenu.clearMenu();
            setupGameMenu.setupMenu();
        });
        
        controls.addEventListener("click", () => {
            mainMenu.clearMenu();
            controlsMenu.setupMenu();
        });

        scoreboard.addEventListener("click", () => {
            mainMenu.clearMenu();
            scoreboardMenu.setupMenu();
        });

        options.addEventListener("click", () => {
            mainMenu.clearMenu();
            optionsMenu.setupMenu();
        });

    }
}

class SetupGameMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Setup game";

        const difficulty = document.createElement("button");
        const specialBlocks = document.createElement("button");
        const backBtn = document.createElement("button");

        difficulty.setAttribute("id", "difficulty-setting");
        specialBlocks.setAttribute("id", "special-blocks-setting");
        backBtn.setAttribute("id", "go-back");

        difficulty.setAttribute("class", "menu-button");
        specialBlocks.setAttribute("class", "menu-button");

        difficulty.textContent = "Difficulty EASY";
        specialBlocks.textContent = "Special Blocks ON";
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

        backBtn.addEventListener("click", clearAnyMenu);

        difficultySetting = document.querySelector("#difficulty-setting");
        specialBlocksSetting = document.querySelector("#special-blocks-setting");
        goBack = document.querySelector("#go-back");
        difficultyDescription = document.querySelector("#difficulty-description");
        specBlocksDescription = document.querySelector("#special-blocks-description");

    }

}


class ControlsMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Controls";

        const leftBtn = document.createElement("button");
        const fireBtn = document.createElement("button");
        const rightBtn = document.createElement("button");
        const backBtn = document.createElement("button");

        backBtn.setAttribute("id", "go-back");
        leftBtn.setAttribute("id", "move-left");
        fireBtn.setAttribute("id", "fire");
        rightBtn.setAttribute("id", "move-right");

        backBtn.textContent = "⬅️";
        leftBtn.textContent = "⬅️";
        fireBtn.textContent = "SPACE";
        rightBtn.textContent = "➡️";

        const elements = [leftBtn, fireBtn, rightBtn];

        for (const element of elements) {
            element.setAttribute("class", "controls-button");
            menu.appendChild(element);
        }

        document.body.appendChild(backBtn);

        backBtn.addEventListener("click", clearAnyMenu);

        moveLeft = document.querySelector("#move-left");
        fire = document.querySelector("#fire");
        moveRight = document.querySelector("#move-right");
        goBack = document.querySelector("#go-back");

    }
}

class ScoreboardMenu extends Menu {

    constructor (name) {
        super(name);
    }

    
    setupMenu() {

        headline.textContent = "Scoreboard";

        const ftPlace = document.createElement("div");
        const secPlace = document.createElement("div");
        const thdPlace = document.createElement("div");
        
        ftPlace.setAttribute("id", "first-place");
        secPlace.setAttribute("id", "second-place");
        thdPlace.setAttribute("id", "third-place");
        
        const elements = [ftPlace, secPlace, thdPlace];

        for (const element of elements) {
            element.setAttribute("class", "score");
            menu.appendChild(element);
        }

        const firstName = document.createElement("p");
        const secondName = document.createElement("p");
        const thirdName = document.createElement("p");

        firstName.setAttribute("id", "first-name");
        secondName.setAttribute("id", "second-name");
        thirdName.setAttribute("id", "third-name");

        const firstScore = document.createElement("p");
        const secondScore = document.createElement("p");
        const thirdScore = document.createElement("p");

        firstScore.setAttribute("id", "first-score");
        secondScore.setAttribute("id", "second-score");
        thirdScore.setAttribute("id", "third-score");

        ftPlace.appendChild(firstName);
        ftPlace.appendChild(firstScore);

        secPlace.appendChild(secondName);
        secPlace.appendChild(secondScore);

        thdPlace.appendChild(thirdName);
        thdPlace.appendChild(thirdScore);

        const backBtn = document.createElement("button");
        backBtn.setAttribute("id", "go-back");
        backBtn.textContent = "⬅️"

        document.body.appendChild(backBtn);
        backBtn.addEventListener("click", clearAnyMenu);

        firstPlace = document.querySelector("#first-place");
        firstPlaceName = document.querySelector("#first-name");
        firstPlaceScore = document.querySelector("#first-score");

        secondPlace = document.querySelector("#second-place");
        secondPlaceName = document.querySelector("#second-name");
        secondPlaceScore = document.querySelector("#second-score");

        thirdPlace = document.querySelector("#third-place");
        thirdPlaceName = document.querySelector("#third-name");
        thirdPlaceScore = document.querySelector("#third-score");

        firstPlaceName.textContent = "Adam";
        firstPlaceScore.textContent = 90;

        displayScore();

        goBack = document.querySelector("#go-back");

    }


}

class OptionsMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Options";

        const music = document.createElement("button");
        const sound = document.createElement("button");
        const backBtn = document.createElement("button");

        music.setAttribute("id", "music-setting");
        sound.setAttribute("id", "sound-setting");
        backBtn.setAttribute("id", "go-back");

        music.textContent = "Music ON";
        sound.textContent = "Sound ON";
        backBtn.textContent = "⬅️";

        const elements = [music, sound];
        
        for (const element of elements) {
            element.setAttribute("class", "menu-button");
            menu.appendChild(element);
        }
        document.body.appendChild(backBtn);

        music.addEventListener("click", () => {
            if (music.textContent === "Music ON") {
                music.textContent = "Music OFF";

                //Miejsce na funkcję osługującą muzykę
            } else {
                music.textContent = "Music ON";
            }
        });

        sound.addEventListener("click", () => {
            if (sound.textContent === "Sound ON") {
                sound.textContent = "Sound OFF";

                //Miejsce na funkcję osługującą dźwięk
            } else {
                sound.textContent = "Sound ON";
            }
        });

        backBtn.addEventListener("click", clearAnyMenu);

        musicSetting = document.querySelector("#music-setting");
        soundSetting = document.querySelector("#sound-setting");
        goBack = document.querySelector("#go-back");

    }

}

//OBJECTS

//Menu objects

const mainMenu = new MainMenu("MainMenu");
const setupGameMenu = new SetupGameMenu("SetupGameMenu");
const controlsMenu = new ControlsMenu("ControlsMenu");
const scoreboardMenu = new ScoreboardMenu("ScoreboardMenu");
const optionsMenu = new OptionsMenu("OptionsMenu");

//VARIABLES

//Main Selectors

const menu = document.querySelector("#main-menu");
const headline = document.querySelector("h1");

//Main Menu Selectors

let startGame = document.querySelector("#start-game");
let controls = document.querySelector("#controls");
let scoreboard = document.querySelector("#scoreboard");
let options = document.querySelector("#options");

//Start Game Menu Selectors

let difficultySetting;
let specialBlocksSetting;
let difficultyDescription;
let specBlocksDescription;

//Controls Menu Selectors

let moveLeft; 
let fire; 
let moveRight; 
let goBack = 0; 

//Scoreboard Menu Selectors

let firstPlace;
let firstPlaceName;
let firstPlaceScore;

let secondPlace;
let secondPlaceName;
let secondPlaceScore;

let thirdPlace;
let thirdPlaceName;
let thirdPlaceScore;

//Options Menu Selectors

let musicSetting;
let soundSetting;

//IDB Selectors

let db;

const request = indexedDB.open("score", 1);

request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Database opened");
};

request.onerror = (event) => {
    console.log("Database failed to open");
};

request.onupgradeneeded = (event) => {

    const db = event.target.result;
    const objectStore = db.createObjectStore("playerScore", { keyPath: "name" });
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("score", "score", { unique: false});

    console.log("Database upgrade successful");
};


function addData(e) {
    e.preventDefault();

    const newItem = { name: playerName.value, score: playerScore.value};

    const transaction = db.transaction(["score"], "readwrite");
    const objectStore = transaction.objectStore("score");
    const addItem = objectStore.add(newItem);
};

const saveBtn = document.querySelector("#save-score");
const playerName = document.querySelector("#player-name");
const playerScore = document.querySelector("#player-score");
const form = document.querySelector("form");

form.addEventListener("submit", addData);

//FUNCTIONS - menus


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
    }

    mainMenu.setupMenu();
}

//Functions - IDB





//EVENT LISTENERS

//Event listeners - Main menu buttons

startGame.addEventListener("click", () => {
    mainMenu.clearMenu();
    setupGameMenu.setupMenu();
});

controls.addEventListener("click", () => {
    mainMenu.clearMenu();
    controlsMenu.setupMenu();
});

scoreboard.addEventListener("click", () => {
    mainMenu.clearMenu();
    scoreboardMenu.setupMenu();
});

options.addEventListener("click", () => {
    mainMenu.clearMenu();
    optionsMenu.setupMenu();
});

//Event listeners - IDB









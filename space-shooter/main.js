//Notes

//CLASSES

//Menu Classes

import { Menu } from "/Menu/Classes/Menu.js";
import { MainMenu } from "/Menu/Classes/MainMenu.js";
import { SetupGameMenu } from "/Menu/Classes/SetupGameMenu.js";

//---------------------------------



//---------------------------------




//---------------------------------

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
        const canvas  = document.createElement("canvas");

        backBtn.setAttribute("id", "go-back");
        leftBtn.setAttribute("id", "move-left");
        fireBtn.setAttribute("id", "fire");
        rightBtn.setAttribute("id", "move-right");
        canvas.setAttribute("id", "display");
        canvas.setAttribute("class", "canvas");

        canvas.setAttribute("width", "640");
        canvas.setAttribute("height", "200");

        backBtn.textContent = "⬅️";
        leftBtn.textContent = "⬅️";
        fireBtn.textContent = "SPACE";
        rightBtn.textContent = "➡️";

        const elements = [leftBtn, fireBtn, rightBtn];

        for (const element of elements) {
            element.setAttribute("class", "controls-button");
            menu.appendChild(element);
        }

        document.body.appendChild(canvas);

        document.body.appendChild(backBtn);

        backBtn.addEventListener("click", clearAnyMenu);

        moveLeft = document.querySelector("#move-left");
        fire = document.querySelector("#fire");
        moveRight = document.querySelector("#move-right");
        canvasDisplay = document.querySelector("#display");
        goBack = document.querySelector("#go-back");

        drawControls();

    }
}

//---------------------------------

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

        goBack = document.querySelector("#go-back");

        //firstPlaceName.textContent = "Adam";
        //firstPlaceScore.textContent = 90;

        //displayScore();

        

    }


}

//---------------------------------

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

        if (musicOn === 0) {
            music.textContent = "Music OFF";
        } else {
            music.textContent = "Music ON";
        }

        sound.textContent = "Sound ON";
        backBtn.textContent = "⬅️";

        const elements = [music, sound];
        
        for (const element of elements) {
            element.setAttribute("class", "menu-button");
            menu.appendChild(element);
        }
        document.body.appendChild(backBtn);

        music.addEventListener("click", () => {
            if (musicOn === 0) {
                music.textContent = "Music ON";
                menuMusic.play();
                musicOn = 1;

            } else {
                music.textContent = "Music OFF";
                menuMusic.pause();
                musicOn = 0;
            }
        });

        sound.addEventListener("click", () => {
            if (soundOn === 0) {
                sound.textContent = "Sound ON";
                //Place for a sound control function
                soundOn = 1;

            } else {
                sound.textContent = "Sound OFF";
                //Place for a sound control function
                soundOn = 0;

            }
        });

        backBtn.addEventListener("click", clearAnyMenu);

        musicSetting = document.querySelector("#music-setting");
        soundSetting = document.querySelector("#sound-setting");
        goBack = document.querySelector("#go-back");

    }

}

//Canvas classes


import { GameScreen } from "/Canvas/Classes/GameScreen.js";
import { Spaceship } from "/Canvas/Classes/Spaceship.js";
import { Block } from "/Canvas/Classes/Block.js";
import { Bullet } from "/Canvas/Classes/Bullet.js";
import { Regular } from "/Canvas/Classes/Regular.js";

//---------------------------------

=======
//---------------------------------

class GameScreen {
    constructor(name) {
        this.name = name;
        
    }

    setupScreen() {

        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        const gameDisplay = document.createElement("canvas");
        gameDisplay.setAttribute("id", "game-screen");
        gameDisplay.setAttribute("class", "canvas");
        gameDisplay.setAttribute("width", "1280");
        gameDisplay.setAttribute("height", "640");
        document.body.appendChild(gameDisplay);
        canvasDisplay = document.querySelector("#game-screen");

        const scoreCounter = document.createElement("p");
        scoreCounter.setAttribute("id", "score-count");
        scoreCounter.setAttribute("class", "counter");
        document.body.appendChild(scoreCounter);
        scoreCount = document.querySelector("#score-count");

        const livesCounter = document.createElement("p");
        livesCounter.setAttribute("id", "lives-count");
        livesCounter.setAttribute("class", "counter");
        document.body.appendChild(livesCounter);
        livesCount = document.querySelector("#lives-count");

        const pausePara = document.createElement("p");
        pausePara.setAttribute("id", "pause-flasher");
        document.body.appendChild(pausePara);
        pauseFlasher = document.querySelector("#pause-flasher");

        createBlock();
        let createBlockInterval = setInterval(createBlock, 3000);

        window.addEventListener("keydown", (e) => {

            switch (e.key) {

                case " ":
                    const bullet = new Bullet(spaceshipGame.x, spaceshipGame.y - 50, 10, 10, 10, "white");
                    bullets.push(bullet);
                    break;

                case "Escape":
                    console.log("Escape pressed");
                    if (!pause) {
                        pause = true;
                        clearInterval(createBlockInterval);
                        createBlockInterval = 0;
                        pauseFlasher.textContent = "Pause";
                        pauseFlasherInterval = setInterval(pauseFlashing, 1000);

                    } else {
                        pause = false;
                        clearInterval(pauseFlasherInterval);
                        pauseFlasher.textContent = "";
                        pauseFlasherInterval = 0;
                        createBlockInterval = setInterval(createBlock, 3000);
                        drawGame();
                    }
                    break;

            }
            
            
        });

        

        /*const backBtn = document.createElement("button");
        backBtn.setAttribute("id", "go-back");
        backBtn.textContent = "⬅️";
        backBtn.addEventListener("click", clearAnyMenu);
        document.body.appendChild(backBtn);
        goBack = document.querySelector("#go-back");*/

    }


    gameOver() {

        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.font = "90px serif";
        ctx.fillText("Game over", 430, 400);

    }

}

//---------------------------------

class Spaceship {
    constructor(x, y, width, height, velX, velY, bulletY, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;
        this.bulletY = bulletY;
        this.bulletX = 0;
        this.bulletStart = bulletY;
        this.color = color;
        this.bullet = false;

        window.addEventListener("keydown", (e) => {

            switch (e.key) {

                case "ArrowRight":
                    this.x += this.velX;
                    break;

                case "ArrowLeft":
                    this.x -= this.velX;
                    break;

                /*case " ":
                    this.bullet = true;
                    break;*/
            }
        });

    }

    draw() {

        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 100, this.y);
        ctx.lineTo(this.x + 100, this.y - 25);
        ctx.lineTo(this.x + 75, this.y - 25);
        ctx.lineTo(this.x + 75, this.y - 50);
        ctx.lineTo(this.x + 25, this.y - 50);
        ctx.lineTo(this.x + 25, this.y - 25);
        ctx.lineTo(this.x, this.y - 25);
        ctx.fillStyle = this.color;
        ctx.fill();

    }

    checkBounds() {

        if((this.x + 100) >= canvasDisplay.width) {
            this.x -= this.velX;
        }

        if(this.x <= 0) {
            this.x += this.velX;
        }
    }

}

//---------------------------------

class Block {
    constructor(x, y, velY, width, height, color) {
        this.x = x;
        this.y = y;
        this.velY = velY;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

//---------------------------------

class Bullet extends Block {
    constructor(x, y, velY, width, height, color) {
        super(x, y, velY, width, height, color);
        this.exists = true;
    }

    draw() {

        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 45, this.y, this.width, this.height);
        this.y -= this.velY;

    }

    colisionDetection() {

        for (const block of blocks) {
            if (block.exists) {
                const dx = this.x - block.x;
                const dy = this.y - block.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.height + block.height) {
                    block.exists = false;
                    this.exists = false;
                    score += 10;
                
                }
            }
        }

        if (this.y <= 0) {
            this.exists = false;

        }

    }

}

//---------------------------------

class Regular extends Block {
    constructor(x, y, velY, width, height, color) {
        super(x, y, velY, width, height, color)
        this.exists = true;
    }

    draw() {

        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.y += this.velY;

    }

    colisionDetection() {

        if (this.y > canvasDisplay.height) {
            this.exists = false;
            lives --;
            
        }

    }

}



//OBJECTS

//Menu objects

const mainMenu = new MainMenu("MainMenu");
const setupGameMenu = new SetupGameMenu("SetupGameMenu");
const controlsMenu = new ControlsMenu("ControlsMenu");
const scoreboardMenu = new ScoreboardMenu("ScoreboardMenu");
const optionsMenu = new OptionsMenu("OptionsMenu");

export { mainMenu, setupGameMenu, controlsMenu, scoreboardMenu, optionsMenu };

//Canvas objects

const gameDisplay = new GameScreen("GameScreen");
const spaceshipControls = new Spaceship(270, 200, 100, 50, 7, 8, 150, "white");
const spaceshipGame = new Spaceship(640, 640, 100, 100, 13, 10, 590, "white");

export { gameDisplay, spaceshipControls, spaceshipGame };

//VARIABLES

//Main Variables

const menu = document.querySelector("#main-menu");
const headline = document.querySelector("h1");
const menuMusic = document.querySelector("audio");
const goBack = document.querySelector("#go-back");

export { menu, headline, menuMusic, goBack };

//Starter screen Variables

let play = document.querySelector("#play");

//Main Menu Variables

let startGame = document.querySelector("#start-game");
let controls = document.querySelector("#controls");
let scoreboard = document.querySelector("#scoreboard");
let options = document.querySelector("#options");

export { startGame, controls, scoreboard, options};


//Start Game Menu Variables

let difficultySetting = document.querySelector("#difficulty-setting");
let specialBlocksSetting = document.querySelector("#special-blocks-setting");
let difficultyDescription = document.querySelector("#difficulty-description");
let specBlocksDescription = document.querySelector("#special-blocks-description");
let newGame = document.querySelector("#play-game-button");

//Controls Menu Variables

let moveLeft; 
let fire; 
let moveRight;
let goBack = document.querySelector("#go-back");

export {goBack};



//Scoreboard Menu Variables

let firstPlace;
let firstPlaceName;
let firstPlaceScore;

let secondPlace;
let secondPlaceName;
let secondPlaceScore;

let thirdPlace;
let thirdPlaceName;
let thirdPlaceScore;

//IndexedDB Variables

let db;
const openRequest = window.indexedDB.open("playerScore_db", 1);

//Game screen Variables


let canvasDisplay = 0;
let scoreCount = 0;
let score = 0;
let lives = 3;
let requestAnimation;
let pause = false;
let pauseFlasher = 0;
const bullets = [];
const blocks = [];


export { score, lives, pauseFlasher, pause, requestAnimation, bullets, blocks };
export {canvasDisplay, score, lives, pauseFlasher, pause, bullets, blocks};

//FUNCTIONS

//Functions - menus


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
        
        case "Game Display":
            gameDisplay.clearMenu();
            break;

    }

    mainMenu.setupMenu();
}

export { clearAnyMenu };

//Functions - IndexedDB

function addScore(e) {

    e.preventDefault();

    const newItem = { title: playerName.value, body: playerScore.value };
    const transaction = db.transaction(["playerScore_os"], "readwrite");
    const objectStore = transaction.objectStore("playerScore_os");
    const addRequest = objectStore.add(newItem);

    addRequest.addEventListener("success", () => {
        //miejsce na kod odnoszący do okna zpisu wyniku
    });

    transaction.addEventListener("complete", () => {
        console.log("Transaction completed: database modification finished");
    });

    transaction.addEventListener("error", () => {
        console.log("Transaction not opened due to error");
    });

}

/*function displayScore() {
}*/

//Functions - sounds

//Functions - CANVAS

//Game Screen

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateScore() {
    const scoreCount = document.querySelector("#score-count");
    score += 10;
    scoreCount.textContent = `Score ${score}`;
}

function updateLives() {
    const livesCount = document.querySelector("#lives-count");
    lives --;
    livesCount.textContent = `Lives x${lives}`;

}

function pauseFlashing() {

    const pausePara = document.querySelector("#pause-flasher");
    
    if (pausePara.textContent === "Pause") {
        pausePara.textContent = "";
    } else {
        pausePara.textContent = "Pause";
    }
}

export { pauseFlashing, updateScore, updateLives };

function drawGame() {

    if (!gameDisplay.pause) {

        spaceshipGame.draw();
        spaceshipGame.checkBounds();

        for (const block of blocks) {
            if (block.exists) {
                block.colisionDetection();
                block.draw();
            }
        }

        for (const bullet of bullets) {
            if (bullet.exists) {
                bullet.colisionDetection();
                bullet.draw();
            }
        }

        requestAnimation = requestAnimationFrame(drawGame);

        if (lives === 0) {
            cancelAnimationFrame(requestAnimation);
            gameDisplay.gameOver();
        }

    }
    
}

export { drawGame };

//Controls Display

function drawControls() {

    spaceshipControls.draw();
    spaceshipControls.checkBounds();

    requestAnimationFrame(drawControls);

}

//Create block object

function createBlock() {

    const block = new Regular (random(20, 1200), 0, 2, 50, 30, "white");
    blocks.push(block);

}

export { createBlock };

//EVENT LISTENERS

//Event listeners - Start screen buttons

play.addEventListener("click", () =>{
    mainMenu.setupMenu();
    menuMusic.play();
});


//Event listeners - IndexedDB

openRequest.addEventListener("error", () => {
    console.error("Database failed to open");
});

openRequest.addEventListener("success", () => {
    console.log("Database opened successfully");
    db = openRequest.result;
});

openRequest.addEventListener("upgradeneeded", (e) => {
    db = e.target.result;
    const objectStore = db.createObjectStore("playerScore_os", {
        keyPath: "id",
        autoIncrement: true,
    });

    objectStore.createIndex("title", "name", { unique: false});
    objectStore.createIndex("body", "score", { unique: false});

    console.log("Database setup complete");
});

//Event listeners - canvas



//Event listeners - sounds


//Notes

//CLASSES

//Menu Classes

import { Menu } from "/Menu/Classes/Menu.js";
import { MainMenu } from "/Menu/Classes/MainMenu.js";
import { SetupGameMenu } from "/Menu/Classes/SetupGameMenu.js";
import { ControlsMenu } from "/Menu/Classes/ControlsMenu.js";
import { ScoreboardMenu } from "/Menu/Classes/ScoreboardMenu.js";
import { OptionsMenu } from "/Menu/Classes/OptionsMenu.js";

//---------------------------------

//Canvas classes

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
        //canvasDisplay = document.querySelector("#game-screen");

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

        const canvasDisplay = document.querySelector(".canvas");

        if ((this.x + 100) >= canvasDisplay.width) {
            this.x -= this.velX;
        }

        if (this.x <= 0) {
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

        const canvasDisplay = document.querySelector(".canvas");

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

export { menu, headline, menuMusic };

//Starter screen Variables

const play = document.querySelector("#play");

//Main Menu Variables

const startGame = document.querySelector("#start-game");
const controls = document.querySelector("#controls");
const scoreboard = document.querySelector("#scoreboard");
const options = document.querySelector("#options");

export { startGame, controls, scoreboard, options};

//Start Game Menu Variables

let difficultySetting = document.querySelector("#difficulty-setting");
let specialBlocksSetting = document.querySelector("#special-blocks-setting");
let difficultyDescription = document.querySelector("#difficulty-description");
let specBlocksDescription = document.querySelector("#special-blocks-description");
let newGame = document.querySelector("#play-game-button");

//Controls Menu Variables

const moveLeft = document.querySelector("#move-left"); 
const fire = document.querySelector("#fire") ; 
const moveRight = document.querySelector("#move-right");
const goBack = document.querySelector("#go-back");

export { moveLeft, fire, moveRight, goBack};


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

//Options Menu Variables

let musicSetting;
let soundSetting;

//IndexedDB Variables

let db;
const openRequest = window.indexedDB.open("playerScore_db", 1);

//Sound Variables

let musicOn = 1;
let soundOn = 1;

//Game screen Variables

let canvasDisplay;
let scoreCount = 0;
let score = 0;
let livesCount = 0;
let lives = 3;
let requestAnimation;
let pause = false;
let pauseFlasher = 0;
let pauseFlasherInterval;
const bullets = [];
const blocks = [];

export { score, lives, pauseFlasher, pause, bullets, blocks };

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
        
        //Placeholder for Game Screen case
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
    scoreCount.textContent = `Score ${score}`;
}

function updateLives() {
    const livesCount = document.querySelector("#lives-count");
    livesCount.textContent = `Lives x${lives}`;

    if (lives === 0) {
        cancelAnimationFrame(requestAnimation);
        gameDisplay.gameOver();
    }

}

function pauseFlashing() {

    const pausePara = pauseFlasher;
    
    if (pausePara.textContent === "Pause") {
        pausePara.textContent = "";
    } else {
        pausePara.textContent = "Pause";
    }
}


function drawGame() {

    if (!pause) {

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
        
        updateScore();

        requestAnimation = requestAnimationFrame(drawGame);

        updateLives();

    }
    
}

export { drawGame };

//Controls Display

function drawControls() {

    spaceshipControls.draw();
    spaceshipControls.checkBounds();

    requestAnimationFrame(drawControls);

}

export { drawControls };

//Create block object

function createBlock() {

    const block = new Regular (random(20, 1200), 0, 2, 50, 30, "white");
    blocks.push(block);

}

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


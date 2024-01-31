import { bullets, db, headline, spaceshipGame, createBlock, pauseFlashing, drawGame, score, lives, resetGame, menu, /*addScore*/ } from "../../main.js";
import { Bullet } from "./Bullet.js";
import { Menu } from "../../Menu/Classes/Menu.js";

class GameScreen extends Menu {
    constructor(name) {
        super(name);
        this.name = name;
        this.createBlockInterval;
        this.pauseFlasherInterval;
        this.pause = false;

    }

    setupScreen() {

        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }

        headline.setAttribute("id", "ghost-headline");
        headline.textContent = "Game Display";

        const gameDisplay = document.createElement("canvas");
        gameDisplay.setAttribute("id", "game-screen");
        gameDisplay.setAttribute("class", "canvas");
        gameDisplay.setAttribute("width", "1280");
        gameDisplay.setAttribute("height", "640");
        document.body.appendChild(gameDisplay);

        const scoreCounter = document.createElement("p");
        scoreCounter.setAttribute("id", "score-count");
        scoreCounter.setAttribute("class", "counter");
        scoreCounter.textContent = `Score ${score}`;
        document.body.appendChild(scoreCounter);

        const livesCounter = document.createElement("p");
        livesCounter.setAttribute("id", "lives-count");
        livesCounter.setAttribute("class", "counter");
        livesCounter.textContent = `Lives x${lives}`;
        document.body.appendChild(livesCounter);

        const pausePara = document.createElement("p");
        pausePara.setAttribute("id", "pause-flasher");
        document.body.appendChild(pausePara);

        /*const backBtn = document.createElement("button");
        backBtn.setAttribute("id", "go-back");
        backBtn.textContent = "⬅️";

        backBtn.addEventListener("click", () => {

            cancelAnimationFrame(requestAnimation);
            clearAnyMenu();
        
        });

        document.body.appendChild(backBtn);*/

        createBlock();
        this.createBlockInterval = setInterval(createBlock, 3000);

        window.addEventListener("keydown", (e) => {

            switch (e.key) {

                case " ":
                    const bullet = new Bullet(spaceshipGame.x, spaceshipGame.y - 50, 10, 10, 10, "white");
                    bullets.push(bullet);
                    break;

                case "Escape":
                    console.log("Escape pressed");
                    if (!this.pause) {
                        this.pause = true;
                        clearInterval(this.createBlockInterval);
                        this.createBlockInterval = 0;
                        pausePara.textContent = "Pause";
                        this.pauseFlasherInterval = setInterval(pauseFlashing, 1000);

                    } else {
                        this.pause = false;
                        clearInterval(this.pauseFlasherInterval);
                        pausePara.textContent = "";
                        this.pauseFlasherInterval = 0;
                        this.createBlockInterval = setInterval(createBlock, 3000);
                        drawGame();
                    }
                    break;

            }
            
            
        });

    }

    saveScore () {

        const saveScoreBox = document.createElement("div");
        saveScoreBox.setAttribute("class", "menu");
        saveScoreBox.setAttribute("id", "save-score-box");
        document.body.appendChild(saveScoreBox);

        const saveScoreForm = document.createElement("form");
        saveScoreForm.setAttribute("class", "menu");
        saveScoreForm.setAttribute("id", "save-score-form");
        saveScoreBox.appendChild(saveScoreForm);

        const playerNameFieldLabel = document.createElement("label");
        playerNameFieldLabel.setAttribute("for", "player-name-field");
        playerNameFieldLabel.textContent = "Player Name";
        saveScoreForm.appendChild(playerNameFieldLabel);

        const playerNameField = document.createElement("input");
        playerNameField.setAttribute("type", "text");
        playerNameField.setAttribute("id", "player-name-field");
        playerNameField.setAttribute("name", "Player Name");
        saveScoreForm.appendChild(playerNameField);

        const saveScoreButton = document.createElement("button");
        saveScoreButton.setAttribute("class", "menu-button");
        saveScoreButton.textContent = "Save";
        saveScoreForm.appendChild(saveScoreButton);
        saveScoreButton.addEventListener("click", e => {

            e.preventDefault();
    
            const newItem = { name: playerNameField.value, score: score };
            const transaction = db.transaction(["playerScore_os"], "readwrite");
            const objectStore = transaction.objectStore("playerScore_os");
            const addRequest = objectStore.add(newItem);

            addRequest.addEventListener("success", resetGame);

            transaction.addEventListener("complete", () => {
                console.log("Transaction completed: database modification finished");
            });

            transaction.addEventListener("error", () => {
                console.log("Transaction not opened due to error");
            });

                });

    }

    gameOver() {

        clearInterval(this.createBlockInterval);

        const gameOverScreen = document.createElement("div");
        gameOverScreen.setAttribute("class", "menu");
        gameOverScreen.setAttribute("id", "game-over-screen");

        const gameOverPara = document.createElement("p");
        gameOverPara.setAttribute("class", "final-para");
        gameOverPara.textContent = "Game Over";

        const finalScore = document.createElement("p");
        finalScore.setAttribute("class", "final-para");
        finalScore.textContent = score;

        const restartButton = document.createElement("button");
        restartButton.setAttribute("class", "menu-button");
        restartButton.textContent = "Restart";
        restartButton.addEventListener("click", resetGame);

        const saveButton = document.createElement("button");
        saveButton.setAttribute("class", "menu-button");
        saveButton.textContent = "Save score";
        saveButton.addEventListener("click", this.saveScore);

        const elements = [gameOverPara, finalScore, restartButton, saveButton];

        document.body.appendChild(gameOverScreen);
        for (const element of elements) {
            gameOverScreen.appendChild(element);
        }



    }

}

export { GameScreen };
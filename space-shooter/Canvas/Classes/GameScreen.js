import { bullets, headline, spaceshipGame, createBlock, pauseFlashing, drawGame, score, lives, resetGame, menu } from "../../main.js";
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


    gameOver() {

        /*const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");

        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.font = "90px serif";
        ctx.fillText("Game over", 430, 400);*/

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

        const elements = [gameOverPara, finalScore, restartButton];

        document.body.appendChild(gameOverScreen);
        for (const element of elements) {
            gameOverScreen.appendChild(element);
        }

    }

}

export { GameScreen };
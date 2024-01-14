import { bullets, spaceshipGame, createBlock, pauseFlashing, drawGame, score, lives, clearAnyMenu, requestAnimation } from "../../main.js";
import { Bullet } from "./Bullet.js";

class GameScreen {
    constructor(name) {
        this.name = name;
        this.pauseFlasherInterval;
        this.pause = false;

    }

    setupScreen() {

        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        const ghostHeadline = document.createElement("h1");
        ghostHeadline.setAttribute("id", "ghost-headline");
        ghostHeadline.textContent = "Game Display";
        document.body.appendChild(ghostHeadline);

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
        let createBlockInterval = setInterval(createBlock, 3000);

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
                        clearInterval(createBlockInterval);
                        createBlockInterval = 0;
                        pausePara.textContent = "Pause";
                        this.pauseFlasherInterval = setInterval(pauseFlashing, 1000);

                    } else {
                        this.pause = false;
                        clearInterval(this.pauseFlasherInterval);
                        pausePara.textContent = "";
                        this.pauseFlasherInterval = 0;
                        createBlockInterval = setInterval(createBlock, 3000);
                        drawGame();
                    }
                    break;

            }
            
            
        });

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

export { GameScreen };

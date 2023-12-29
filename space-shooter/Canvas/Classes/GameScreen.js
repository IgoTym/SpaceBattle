import { bullets } from "../../main.js";

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
        gameDisplay.setAttribute("width", "1280");
        gameDisplay.setAttribute("height", "640");
        document.body.appendChild(gameDisplay);

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

export { GameScreen };

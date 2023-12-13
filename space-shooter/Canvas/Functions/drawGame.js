import { score, lives, gameDisplay, pauseFlasher, pause, bullets, blocks, spaceshipGame } from "../../main.js";


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
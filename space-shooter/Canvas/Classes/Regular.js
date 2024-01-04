import { Block } from "./Block.js";
import { updateLives } from "../../main.js";

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
            updateLives();
            
        }

    }

}

export { Regular };

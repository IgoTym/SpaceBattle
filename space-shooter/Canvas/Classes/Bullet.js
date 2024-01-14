import { Block } from "./Block.js";
import { updateScore, blocks } from "../../main.js";

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
                    updateScore();
                
                }
            }
        }

        if (this.y <= 0) {
            this.exists = false;

        }

    }

}

export { Bullet };

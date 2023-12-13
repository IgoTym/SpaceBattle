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
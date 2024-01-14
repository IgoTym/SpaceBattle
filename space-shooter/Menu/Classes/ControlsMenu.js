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
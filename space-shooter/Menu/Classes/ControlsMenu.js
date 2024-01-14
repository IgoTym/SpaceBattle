import {Menu} from "./Menu.js";
import { headline, menu, drawControls, clearAnyMenu  } from "../../main.js";

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
        canvas.setAttribute("class", "canvas");

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

        drawControls();

    }
}

export { ControlsMenu };

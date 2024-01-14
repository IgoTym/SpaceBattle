import { menu, headline } from "../../main.js";

class Menu {

    name;

    constructor(name) {
        this.name = name;
    }

    clearMenu() {

        const button = document.querySelector("#go-back");
        const canvas = document.querySelector(".canvas");
        headline.textContent = "";

        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }

        if (button) {
            document.body.removeChild(button);
            
        }

        if (canvas) {
            document.body.removeChild(canvas);
            
        }

    }

}

export { Menu };

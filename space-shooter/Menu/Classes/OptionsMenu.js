import { Menu } from "./Menu.js";
import { headline, menu, menuMusic, clearAnyMenu } from "../../main.js";

class OptionsMenu extends Menu {

    constructor(name) {
        super(name);
        this.musciOn = 1;
        this.soundOn = 1;
    }


    setupMenu() {

        headline.textContent = "Options";

        const music = document.createElement("button");
        const sound = document.createElement("button");
        const backBtn = document.createElement("button");

        music.setAttribute("id", "music-setting");
        sound.setAttribute("id", "sound-setting");
        backBtn.setAttribute("id", "go-back");

        if (this.musicOn === 0) {
            music.textContent = "Music OFF";
        } else {
            music.textContent = "Music ON";
        }

        if (this.soundOn === 0) {
            sound.textContent = "Sound OFF";
        } else {
            sound.textContent = "Sound ON";
        }

        backBtn.textContent = "⬅️";

        const elements = [music, sound];
        
        for (const element of elements) {
            element.setAttribute("class", "menu-button");
            menu.appendChild(element);
        }

        document.body.appendChild(backBtn);

        music.addEventListener("click", () => {
            if (this.musicOn === 0) {
                music.textContent = "Music ON";
                menuMusic.play();
                this.musicOn = 1;

            } else {
                music.textContent = "Music OFF";
                menuMusic.pause();
                this.musicOn = 0;
            }
        });

        sound.addEventListener("click", () => {
            if (this.soundOn === 0) {
                sound.textContent = "Sound ON";
                //Place for a sound control function
                this.soundOn = 1;

            } else {
                sound.textContent = "Sound OFF";
                //Place for a sound control function
                this.soundOn = 0;

            }
        });

        backBtn.addEventListener("click", clearAnyMenu);

    }

}

export { OptionsMenu };

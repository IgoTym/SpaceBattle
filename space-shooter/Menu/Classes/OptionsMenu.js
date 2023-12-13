class OptionsMenu extends Menu {

    constructor(name) {
        super(name);
    }


    setupMenu() {

        headline.textContent = "Options";

        const music = document.createElement("button");
        const sound = document.createElement("button");
        const backBtn = document.createElement("button");

        music.setAttribute("id", "music-setting");
        sound.setAttribute("id", "sound-setting");
        backBtn.setAttribute("id", "go-back");

        if (musicOn === 0) {
            music.textContent = "Music OFF";
        } else {
            music.textContent = "Music ON";
        }

        sound.textContent = "Sound ON";
        backBtn.textContent = "⬅️";

        const elements = [music, sound];
        
        for (const element of elements) {
            element.setAttribute("class", "menu-button");
            menu.appendChild(element);
        }
        document.body.appendChild(backBtn);

        music.addEventListener("click", () => {
            if (musicOn === 0) {
                music.textContent = "Music ON";
                menuMusic.play();
                musicOn = 1;

            } else {
                music.textContent = "Music OFF";
                menuMusic.pause();
                musicOn = 0;
            }
        });

        sound.addEventListener("click", () => {
            if (soundOn === 0) {
                sound.textContent = "Sound ON";
                //Place for a sound control function
                soundOn = 1;

            } else {
                sound.textContent = "Sound OFF";
                //Place for a sound control function
                soundOn = 0;

            }
        });

        backBtn.addEventListener("click", clearAnyMenu);

        musicSetting = document.querySelector("#music-setting");
        soundSetting = document.querySelector("#sound-setting");
        goBack = document.querySelector("#go-back");

    }

}
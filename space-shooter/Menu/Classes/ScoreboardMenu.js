import { Menu } from "./Menu.js";
import { menu, headline, clearAnyMenu } from "../../main.js";

class ScoreboardMenu extends Menu {

    constructor (name) {
        super(name);
    }

    
    setupMenu() {

        headline.textContent = "Scoreboard";

        const ftPlace = document.createElement("div");
        const secPlace = document.createElement("div");
        const thdPlace = document.createElement("div");
        
        ftPlace.setAttribute("id", "first-place");
        secPlace.setAttribute("id", "second-place");
        thdPlace.setAttribute("id", "third-place");
        
        const elements = [ftPlace, secPlace, thdPlace];

        for (const element of elements) {
            element.setAttribute("class", "score");
            menu.appendChild(element);
        }

        const firstName = document.createElement("p");
        const secondName = document.createElement("p");
        const thirdName = document.createElement("p");

        firstName.setAttribute("id", "first-name");
        secondName.setAttribute("id", "second-name");
        thirdName.setAttribute("id", "third-name");

        const firstScore = document.createElement("p");
        const secondScore = document.createElement("p");
        const thirdScore = document.createElement("p");

        firstScore.setAttribute("id", "first-score");
        secondScore.setAttribute("id", "second-score");
        thirdScore.setAttribute("id", "third-score");

        ftPlace.appendChild(firstName);
        ftPlace.appendChild(firstScore);

        secPlace.appendChild(secondName);
        secPlace.appendChild(secondScore);

        thdPlace.appendChild(thirdName);
        thdPlace.appendChild(thirdScore);

        const backBtn = document.createElement("button");
        backBtn.setAttribute("id", "go-back");
        backBtn.textContent = "⬅️"

        document.body.appendChild(backBtn);
        backBtn.addEventListener("click", clearAnyMenu);

        /*firstPlace = document.querySelector("#first-place");
        firstPlaceName = document.querySelector("#first-name");
        firstPlaceScore = document.querySelector("#first-score");

        secondPlace = document.querySelector("#second-place");
        secondPlaceName = document.querySelector("#second-name");
        secondPlaceScore = document.querySelector("#second-score");

        thirdPlace = document.querySelector("#third-place");
        thirdPlaceName = document.querySelector("#third-name");
        thirdPlaceScore = document.querySelector("#third-score");

        goBack = document.querySelector("#go-back");

        //firstPlaceName.textContent = "Adam";
        //firstPlaceScore.textContent = 90;

        //displayScore();*/

        

    }


}

export { ScoreboardMenu };

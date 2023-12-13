function pauseFlashing() {

    const pausePara = pauseFlasher;
    
    if (pausePara.textContent === "Pause") {
        pausePara.textContent = "";
    } else {
        pausePara.textContent = "Pause";
    }
}
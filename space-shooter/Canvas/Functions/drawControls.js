function drawControls() {

    spaceshipControls.draw();
    spaceshipControls.checkBounds();

    requestAnimationFrame(drawControls);

}
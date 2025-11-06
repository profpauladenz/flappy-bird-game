function start() {
    if (state !== State.start) {
        return;
    }

    document
    .querySelectorAll('.pipe_sprite, .pipe_img')
    .forEach(element => element.remove());

    bird.style.top = `40vh`;
    bird.style.left = `30vw`;
    bird.style.transform = `scaleY(1)`;

    score = 0;
    frames = 0;
    vy = 0;
    vx = 0;

    message.innerHTML = 'Press Enter To Start Game';
}
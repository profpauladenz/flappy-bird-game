// Função para inicializar a tela de JOGO
function run() {
    state = State.play;
    message.innerHTML = '';

    function loop() {
        update();
        render();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    function update() {
        if (state == State.play) {
            frames++;

            vy+=gravity;
            const box = bird.getBoundingClientRect();
            const newY = box.top + vy;
            //TODO: Não deixar o pássaro sair do frame
            // if (newY > 0) {
            //     bird.style.top = `0px`
            // } else {
            //     bird.style.top = `${newY}px`;
            // }
            bird.style.top = `${newY}px`;

            document
                .querySelectorAll('.pipe_sprite')
                .forEach(pipe => {
                    const boxPipe = pipe.getBoundingClientRect();
                    const newX = boxPipe.left + speed;
                    pipe.style.left = `${newX}px`;

                    //TODO: Eliminar a pipe se estiver fora do game boundaries
                });
        }
    }

    function render() {
        if (state == State.play) {
            // Respawn baseado em frames
            if (frames % 200 == 0) {
                spawnPipe();
            }
        }
    }
}

function doFlap() {
    vy+=flap;
}

function spawnPipe() {
    const box = document.createElement('div');
    box.className = 'pipe_sprite';

    // box.style.left = `99vw`;
    box.style.left = `50vw`;
    box.style.top = `${randomSpawnPoint()}vh`;

    const sprite = document.createElement('img');
    sprite.style.width = `100px`;
    sprite.src = "./assets/pipe.png"
    box.appendChild(sprite);

    game.appendChild(box);
}

function randomSpawnPoint() {
    return Math.floor(Math.random() * 100);
}



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
            const topEdge = 0;
            const lowerEdge = window.innerHeight - box.height;

            let proposal = box.top + vy;

            if (proposal < topEdge) {
                proposal = topEdge;
                vy = 0;
            } else if (proposal > lowerEdge) {
                proposal = lowerEdge;
                vy = 0;
            } 
            
            bird.style.top = `${Math.round(proposal + vy)}px`;

            document
            .querySelectorAll('.pipe_sprite')
            .forEach(pipe => {
                const boxPipe = pipe.getBoundingClientRect();
                const newX = boxPipe.left + speed;

                if (newX < 0) {
                    pipe.remove();
                    console.log("removed");
                } else {
                    pipe.style.left = `${newX}px`;
                }
            });
        }
    }

    function render() {
        if (state == State.play) {
            // Respawn baseado em frames
            if (frames % 200 === 0) {
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
    sprite.className = 'pipe_img';
    sprite.src = "./assets/pipe.png";
    box.appendChild(sprite);

    game.appendChild(box);
}

function randomSpawnPoint() {
    return Math.floor(Math.random() * 100);
}
// Função para inicializar a tela de JOGO
function run() {
    state = State.play;

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
        }
    }

    function render() {
        if (state == State.play) {
            message.innerHTML = 'Loop rodando em ' + frames;
        }
    }
}

function doFlap() {
    vy+=flap;
}
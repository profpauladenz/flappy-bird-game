// Estrutura básica de jogo
const game = document.querySelector('.game');
const bird = document.querySelector('.bird');
const hudScore = document.querySelector('.score');
const message = document.querySelector('.message');
const btnIniciar = document.querySelector('.start');

// Objeto utilizado como uma classe (em maiúscula)
const State = {
    start: "START",
    play: "PLAY",
    end: "END"
}

let state = State.start; 

// HUD - Heads-Up Display
let score = 0;
let best = 0; //TODO: Adicionar lógica

// Internal
let frames = 0;

// Movimento do pássaro (apenas vertical - Y)
const gravity = 0.5;
const flap = -8; 
let vy = 0;

// Movimento dos pipes (apenas horizontal - X) 
let vx = -1;

// Função para inicializar a tela de START
function start() {
//TODO: Adicionar alternativa de início com botão
// btnIniciar.addEventListener('click', () => {
//     state = State.play;
//     message.innerHTML = 'Em jogo!'
// });

    function resetPosition() {
        bird.style.top = `40vh`;
        bird.style.left = `30vw`;
    }

    function resetScore() {
        score = 0;
    }

    function resetFrames() {
        frames = 0;
    }

    resetPosition();
    resetScore();
    resetFrames();
}

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

function end() {
    function lostPosition() {
        bird.style.transform = `scaleY(-1)`;
    }

    lostPosition();
}

document.addEventListener('keydown', (event) => {
    if (state == State.start) {
        if (event.key == "Enter") {
            state = State.play;
            message.innerHTML = 'Voa, bruxão!';
        }
    } else if (state == State.play) {
        if (event.key == " ") {
            doFlap();
        }
    } else { // end

    }
});

function doFlap() {
    vy+=flap;
}

// start();
// run();

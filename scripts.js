// Estrutura básica de jogo
// const game = document.querySelector('.game');
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

// Movimento
const gravity = 0.5;
const flap = -8; 
let vy = 0;

// Função para inicializar a tela de START
function start() {
//TODO: Adicionar alternativa de início com botão
// btnIniciar.addEventListener('click', () => {
//     state = State.play;
//     message.innerHTML = 'Em jogo!'
// });

    document.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            state = State.play;
            message.innerHTML = 'Voa, bruxão!';
        }
    });

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
function game() {
    // state = State.play;

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

start();

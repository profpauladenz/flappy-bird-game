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
const speed = -0.5;
let vx = -1;

document.addEventListener('keydown', (event) => {
    if (state == State.start) {
        if (event.key == "Enter") {
            state = State.play;
            run();
        }
    } else if (state == State.play) {
        if (event.key == " ") {
            doFlap();
        }
    } else { // end

    }
});

start();

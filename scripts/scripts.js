const State = { start: "START", play: "PLAY", end: "END" };
let state = State.start; 

const gravity = 0.5;
const flap = -8; 
const gameSpeed = -0.5;

let score = 0;
let best = 0; //TODO: Adicionar lógica
let frames = 0;
let vy = 0;
let vx = -1;

const game = document.querySelector('.game');
const bird = document.querySelector('.bird');
const hudScore = document.querySelector('.score');
const message = document.querySelector('.message');
const btnIniciar = document.querySelector('.start');

document.addEventListener('keydown', (event) => {
    switch (state, event.key) {
    case State.start && "Enter":
        state = State.play;
        run();
    case State.play && " ":
        doFlap();
    case State.end:
        break;
    }
});

document.addEventListener('pointerdown', () => {
    switch (state) {
    case State.start:
        state = State.play;
        run();
    case State.play:
        doFlap();
    case State.end:
        break;
    }
});

window.addEventListener('load', () => start());
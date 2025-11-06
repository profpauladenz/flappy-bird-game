const State = { start: "START", gameplay: "GAMEPLAY", end: "END" };
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
        gameplay();
    case State.gameplay && " ":
        doFlap();
    case State.end:
        break;
    }
});

//TODO: Não está funcionando bem
// document.addEventListener('pointerdown', () => {
//     switch (state) {
//     case State.start:
//         state = State.gameplay;
//         gameplay();
//     case State.gameplay:
//         doFlap();
//     case State.end:
//         break;
//     }
// });

window.addEventListener('load', () => start());
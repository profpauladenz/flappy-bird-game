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

//TODO: Adicionar alternativa de início com botão
// btnIniciar.addEventListener('click', () => {
//     state = State.play;
//     message.innerHTML = 'Em jogo!'
// });

function start() {
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

    resetPosition();
    resetScore();
}

start();

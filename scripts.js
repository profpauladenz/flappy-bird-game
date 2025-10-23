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

let frames = 0; //TODO: Verificar se necessita ser reinicializado no START


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

    resetPosition();
    resetScore();
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

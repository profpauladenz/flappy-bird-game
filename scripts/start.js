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
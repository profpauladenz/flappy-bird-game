function end() {
    state = State.end;
    bird.style.transform = `scaleY(-1)`;
    message.innerHTML = 'Game over!\n Pressione qualquer tecla para reiniciar';
}
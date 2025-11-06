function end() {
    if (state !== State.end) {
        return;
    }

    bird.style.transform = `scaleY(-1)`;
    message.innerHTML = 'Game over!\n Pressione qualquer tecla para reiniciar';
}
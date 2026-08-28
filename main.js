

//Função para Iniciar o Jogo
const startGame = ( )=>{
pipe.classList.add('pipe-animation');
startButton.style.display = 'none';
gameOver.style.display = 'none';
audioStart.currentTime = 0;
audioStart.play();

if(gameInterval) {
gameInterval = setInterval(gameLoop,10);
}
};


// Função para reiniciar o jogo

const restartGame = ( ) => {

pipe.classList.add('animation');






}
























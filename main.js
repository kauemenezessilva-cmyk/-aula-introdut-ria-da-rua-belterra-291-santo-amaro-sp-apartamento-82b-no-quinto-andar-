// Seleção de Elementos
const mario = document.querySelector ('.mario');
const restarButton = document.querySelector ('.restarButton');
const startButton = document.querySelector ('.startButton');
const pipe = document.querySelector ('.pipe');
const gameOver = document.querySelector ('.gameOver');



//Definição de Audio
const audioStart = new Audio('./sound/audio_theme.mp3')
const audiogameover = new Audio('./sound/audio_gameover.mp3')




//Variaveis de Controle do Jogo
let gameInterval = null;




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



























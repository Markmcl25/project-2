const startButton = document.getElementById('start-button');
const gameArea = document.querySelector('.game-area');
const instructionsArea = document.querySelector('.instructions-area');
const nextButton = document.getElementById('next');
const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');

startButton.addEventListener('click', () => {

    instructionsArea.style.display = 'none';

    gameArea.style.display = 'block';
});
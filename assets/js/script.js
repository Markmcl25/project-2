// Initialize score variable
let score = 0;

// Event listener for start button
const startButton = document.getElementById('start-button');
const gameArea = document.querySelector('.game-area');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
const instructionsArea = document.querySelector('.instructions-area');
const questionContainer = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
// Get reference to the answer image element
const answerImage = document.getElementById("answer-image"); 

let currentQuestionIndex = 0;

startButton.addEventListener('click', () => {
    instructionsArea.style.display = 'none';
    gameArea.style.display = 'block';
    showQuestion();
});

// Event listener for username form submission
document.querySelector(".create-username form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username value
    var username = document.getElementById("username").value;

    // Display username on the screen
    var displayUsername = document.getElementById("display-username");
    displayUsername.textContent = "Username: " + username;

    // Hide create username section
    var createUsernameSection = document.querySelector(".create-username");
    createUsernameSection.style.display = "none";
});

// Function to display current question
function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    answerButtons.innerHTML = ''; // Clear previous answer buttons


    // Create answer buttons for current question
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('button');
        button.addEventListener('click', () => {
            if (answer.correct) {
                score++; // Increment score if the answer is correct
                showAnswerImage(true); // Display correct answer image

            } else {

                showAnswerImage(false); // Display incorrect answer image
            }
            showNextQuestion();
        });
        answerButtons.appendChild(button);
    });
}
// function to show answer picture correct or incorrect
function showAnswerImage(isCorrect) {
    const answerImage = document.getElementById('answer-image');
    if (isCorrect) {
        answerImage.src = '/workspace/project-2/assets/images/correct-answer.png';
    } else {
        answerImage.src = '/workspace/project-2/assets/images/wrong-answer.png'
    }
    answerImage.style.display = 'block';
}

// Function to show the next question or end the quiz
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(); // Show the next question
    } else {
        endQuiz(); // End the quiz if all questions have been answered
    }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    showNextQuestion();
});

// Function to end the quiz
function endQuiz() {
    gameArea.style.display = 'none'; // Hide the game area
    scoreDisplay.textContent = `Score: ${score} out of 20`; // Display the final score
    scoreDisplay.style.display = 'block'; // Show the score display

}
// Counts the amout of answers done correctly
let correctAnswers = 0;
quizQuestions.forEach(question => {
    question.answers.forEach(answer => {
        if (answer.correct) {
            correctAnswers++;
        }
    })
})

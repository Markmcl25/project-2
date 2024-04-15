// Event listener for start button
const startButton = document.getElementById('start-button');
const gameArea = document.querySelector('.game-area');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");
const instructionsArea = document.querySelector('.instructions-area');
const questionContainer = document.getElementById("question");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', () => {
    instructionsArea.style.display = 'none';
    gameArea.style.display = 'block';
    showQuestion();
});

// Event listener for username form submission
document.querySelector(".create-username form").addEventListener("submit", function(event) {
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
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('button');
        button.addEventListener('click', () => {
            if (answer.correct) {
                score++; // Increment score if the answer is correct
            }
            showNextQuestion();
        });
        answerButtons.appendChild(button);
    });
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

// Function to end the quiz
function endQuiz() {
    gameArea.style.display = 'none'; // Hide the game area
    scoreDisplay.textContent = `Score: ${score}`; // Display the final score
    scoreDisplay.style.display = 'block'; // Show the score display
}

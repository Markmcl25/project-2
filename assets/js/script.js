const startButton = document.getElementById('start-button');
const gameArea = document.querySelector('.game-area');
const instructionsArea = document.querySelector('.instructions-area');

// Event listener for start button

startButtons.addEventListener('click', () => {

    instructionsArea.style.display = 'none';

    gameArea.style.display = 'block';
});

// Event listener for username form submission
document.getElementById("username-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get username value
    var username = document.getElementById("username").value;
    
    // Display username on the screen
    var displayUsername = document.getElementById("display-username");
    displayUsername.textContent = "Username: " + username;
    
    // Hide create username section
    var createUsernameSection = document.getElementById("create-username-section");
    createUsernameSection.style.display = "none";
});
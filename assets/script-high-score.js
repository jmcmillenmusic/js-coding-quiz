// Declare initial variable to be utilized in the appending of scores below
var olEl = document.querySelector("ol");
var clearButton = document.querySelector("#clearButton");

// Grabs all of the high scores submitted so far
var allHighScores = JSON.parse(localStorage.getItem("highScores"));

// Creates and calls a function to create list items containing the initials and score of all users who have taken the quiz so far
function addHighScore() {
    for (i = 0; i < allHighScores.length; i++) {
        var newHighScore = document.createElement("li");
        newHighScore.textContent = allHighScores[i].initials + " - " + allHighScores[i].score;
        olEl.appendChild(newHighScore);
    }
    console.log(allHighScores); // Testing purposes only
}
addHighScore();

// Add a clear button to allow the user to clear out the high scores
clearButton.addEventListener("click", function() {
    allHighScores = [];
    localStorage.clear();
    olEl.innerHTML = "";
});
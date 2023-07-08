var newHighScore = document.createElement("li");
var olEl = document.querySelector("ol");
var allHighScores = [];

function addHighScore() {
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores);
    for (i = 0; i < allHighScores.length; i++) {
        newHighScore.textContent = allHighScores[i].highScores;
        olEl.appendChild(newHighScore);
    }
}
addHighScore();
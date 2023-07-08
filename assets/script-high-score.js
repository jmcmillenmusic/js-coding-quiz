var newHighScore = document.createElement("li");
var olEl = document.querySelector("ol");

function addHighScore() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");
    console.log(initials);
    console.log(score);
    newHighScore.textContent = score + " - " + initials;
    olEl.appendChild(newHighScore);
}
addHighScore();
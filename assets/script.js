// Declares initial variables and elements to be utilized in later functions
var timerEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var h3El = document.querySelector("h3");
var startButton = document.querySelector("#startButton");
var answer1Button = document.createElement("button");
var answer2Button = document.createElement("button");
var answer3Button = document.createElement("button");
var answer4Button = document.createElement("button");

// Starts the quiz when the user clicks the Start Button
startButton.addEventListener("click", function() {

    // Change the text to display Question 1
    h3El.textContent = "What is the answer to Question 1?"

    // Remove the Start Button and add buttons for 4 answer choices
    mainEl.removeChild(startButton);
    mainEl.appendChild(answer1Button);
    mainEl.appendChild(answer2Button);
    mainEl.appendChild(answer3Button);
    mainEl.appendChild(answer4Button);
    
    // Place text in the new buttons for each of the answers
    answer1Button.textContent = "Choose me!";
    answer2Button.textContent = "Don't choose me!";
    answer3Button.textContent = "Don't choose me either!";
    answer4Button.textContent = "Definitely don't choose me!";

    function countdown() {
        var timeLeft = 76;
      
        var timeInterval = setInterval(function () {
          timeLeft--;
          timerEl.textContent = "Timer: " + timeLeft;
      
          if (timeLeft === 0) {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
          }
      
        }, 1000);
    }
    countdown();
});
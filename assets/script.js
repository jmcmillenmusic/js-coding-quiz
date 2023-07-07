// Declares initial variables and elements to be utilized in later functions
var timerEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var h3El = document.querySelector("h3");
var startButton = document.querySelector("#startButton");
var answer1Button = document.createElement("button");
var answer2Button = document.createElement("button");
var answer3Button = document.createElement("button");
var answer4Button = document.createElement("button");
var questions = ["How many arguments does a for loop take?", "In an array, the first index is ___.", "If a variable equals \'8\', what is its data type?", "What's the answer to Question 4?", "What's the answer to Question 5?"];
var index = 0;

// Starts the quiz when the user clicks the Start Button
startButton.addEventListener("click", function() {

  // Change the text to display Question 1
  h3El.textContent = questions[index];

  // Remove the Start Button and add buttons for 4 answer choices
  mainEl.removeChild(startButton);
  mainEl.appendChild(answer1Button);
  mainEl.appendChild(answer2Button);
  mainEl.appendChild(answer3Button);
  mainEl.appendChild(answer4Button);
    
  // Place text in the new buttons for each of the answers
  answer1Button.textContent = "0";
  answer2Button.textContent = "1";
  answer3Button.textContent = "2";
  answer4Button.textContent = "3";

  // Causes all of the answer choice buttons to line up vertically
  answer1Button.setAttribute("style", "display: block");
  answer2Button.setAttribute("style", "display: block");
  answer3Button.setAttribute("style", "display: block");
  answer4Button.setAttribute("style", "display: block");

  // Creates and calls the countdown function, giving the user 75 seconds to answer all 5 questions
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


answer1Button.addEventListener("click", function() {
  h3El.textContent = questions[index + 1];
  index++;
});

answer2Button.addEventListener("click", function() {
  h3El.textContent = questions[index + 1];
  index++;
});

answer3Button.addEventListener("click", function() {
  h3El.textContent = questions[index + 1];
  index++;
});

answer4Button.addEventListener("click", function() {
  h3El.textContent = questions[index + 1];
  index++;
});


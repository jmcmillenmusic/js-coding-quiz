// Declares initial variables and elements to be utilized in later functions
var timerEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var h3El = document.querySelector("h3");
var startButton = document.querySelector("#startButton");
var answer1Button = document.createElement("button");
var answer2Button = document.createElement("button");
var answer3Button = document.createElement("button");
var answer4Button = document.createElement("button");
var answerButtons = [answer1Button, answer2Button, answer3Button, answer4Button];
var questions = [{
    title: "How many arguments does a for loop take?", 
    choices: ["0", "1", "2", "3"],
    answer: "3"
  },
  {
    title: "In an array, what is the number for the first index?",
    choices: ["-1", "0", "1", "2"],
    answer: "0"
  },
  {
    title: "If a variable equals \'8\', what is its data type?",
    choices: ["string", "number", "boolean", "array"],
    answer: "string"
  },
  {
    title: "Which special character turns a true comparison false (or vice versa)?",
    choices: [";", ":", "!", "?"],
    answer: "!"
  },
  {
    title: "Which array method removes the last element in an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: "pop()"
  }];
var index = 0;

// Starts the quiz when the user clicks the Start Button
startButton.addEventListener("click", function() {

  // Change the text to display Question 1
  h3El.textContent = questions[index].title;

  // Remove the Start Button and add buttons for 4 answer choices
  mainEl.removeChild(startButton);
  mainEl.appendChild(answer1Button);
  mainEl.appendChild(answer2Button);
  mainEl.appendChild(answer3Button);
  mainEl.appendChild(answer4Button);
    
  // Place text in the new buttons for each of the answers
  answer1Button.textContent = questions[index].choices[0];
  answer2Button.textContent = questions[index].choices[1];
  answer3Button.textContent = questions[index].choices[2];
  answer4Button.textContent = questions[index].choices[3];

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

function nextQuestion() {
  index++;
  // if (no more questions) {
  //   end the quiz
  // }

}

// answer1Button.addEventListener("click", function() {
//   h3El.textContent = questions[index + 1];
//   index++;
// });

// answer2Button.addEventListener("click", function() {
//   h3El.textContent = questions[index + 1];
//   index++;
// });

// answer3Button.addEventListener("click", function() {
//   h3El.textContent = questions[index + 1];
//   index++;
// });

// answer4Button.addEventListener("click", function() {
//   h3El.textContent = questions[index + 1];
//   index++;
// });

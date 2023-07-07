// Declares initial variables and elements to be utilized in later functions
var timerEl = document.querySelector("#countdown");
var mainEl = document.querySelector("main");
var h3El = document.querySelector("h3");
var startButton = document.querySelector("#startButton");
var answer1Button = document.createElement("button");
var answer2Button = document.createElement("button");
var answer3Button = document.createElement("button");
var answer4Button = document.createElement("button");
var rightOrWrong = document.querySelector("#rightOrWrong");
var progress = document.querySelector("#progress");

// Declares the questions array of objects containing questions, choices, and correct answers
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

// Declares the index of the first question that will appear in the quiz, which can also be used in later functions
var index = 0;

// Tracks the number of correct answers from the user
var correct = 0;

// Tracks the amount of time in seconds the user has to complete the quiz
var timeLeft = 76;

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

  // Creates and calls the countdown function, giving the user 75 seconds to answer all 5 questions and showing when time has run out
  function countdown() {
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

  // Advances the index by 1
  index++;
  
  if (index < questions.length) {

    // Changes the text to display the next question
    h3El.textContent = questions[index].title;

    // Replaces the text in each of the buttons with text from the new answer choices
    answer1Button.textContent = questions[index].choices[0];
    answer2Button.textContent = questions[index].choices[1];
    answer3Button.textContent = questions[index].choices[2];
    answer4Button.textContent = questions[index].choices[3];

  } else {
    
    // Tells the user their final score and clear out the answer buttons
    h3El.textContent = "Quiz Complete! Your final score is " + timeLeft + "!"
    timeLeft = 1;
    timerEl.textContent = "";
    mainEl.removeChild(answer1Button);
    mainEl.removeChild(answer2Button);
    mainEl.removeChild(answer3Button);
    mainEl.removeChild(answer4Button);
  } 

  // Shows how many questions they've answered correctly so far
  progress.textContent = "You've answered " + correct + " out of " + index + " questions correctly!";

}

// These 4 functions checks the user's answer to see if it's correct. It adds 1 to the correct var if so and subtracts 10 seconds if not.
function checkAnswer1() {
  if (answer1Button.textContent === questions[index].answer) {
    correct++;
    rightOrWrong.textContent = "Right!"
  } else {
    timeLeft = timeLeft - 10;
    rightOrWrong.textContent = "Wrong!"
  }
}

function checkAnswer2() {
  if (answer2Button.textContent === questions[index].answer) {
    correct++;
    rightOrWrong.textContent = "Right!"
  } else {
    timeLeft = timeLeft - 10;
    rightOrWrong.textContent = "Wrong!"
  }
}

function checkAnswer3() {
  if (answer3Button.textContent === questions[index].answer) {
    correct++;
    rightOrWrong.textContent = "Right!"
  } else {
    timeLeft = timeLeft - 10;
    rightOrWrong.textContent = "Wrong!"
  }
}

function checkAnswer4() {
  if (answer4Button.textContent === questions[index].answer) {
    correct++;
    rightOrWrong.textContent = "Right!"
  } else {
    timeLeft = timeLeft - 10;
    rightOrWrong.textContent = "Wrong!"
  }
}

// Runs the functions above to check for right or wrong answers, tallies correct answers, and advances to the next question when the user clicks on any answer button
answer1Button.addEventListener("click", function() {
  checkAnswer1();
  nextQuestion();
});

answer2Button.addEventListener("click", function() {
  checkAnswer2();
  nextQuestion();
});

answer3Button.addEventListener("click", function() {
  checkAnswer3();
  nextQuestion();
});

answer4Button.addEventListener("click", function() {
  checkAnswer4();
  nextQuestion();
});

// 0. We need a button to start the game
//    -> Start button as the beginning point
//    -> We need to make the start button disappear  
//     -> Do I use CSS? DO I delete an element? Do I overlay the q, choices, answers on top of it? question mark
//    -> Needs to call whatever the function for setInterval is

var startButtonEl = document.querySelector('.startButton')
var beginEl = document.querySelector(".begin")
var questionEl = document.querySelector(".question")
var hideEl = document.querySelector(".hide")
var questionTitleEl = document.querySelector(".questionTitle")
var multipleChoiceEl = document.querySelector(".multipleChoice")
var highscoreEl = document.querySelector(".highscore")
var sumbitEl = document.querySelector("submit")
var secondsLeft = 60

var index = 0
button.start.addEventListener("click", function());
// 1. How do I store my questions and answers?

// => Let's put my questions and answers in an Array!

// Format for a question:
// (question)
// (multiple choice)
// (answer)

//var multiplechoice = [
// {
// question: "whats the answer?",
// choices: ["a", "b"],
// answer: "a"
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// {
// question: "how old are you?",
// choices: [28, 29, 15, 5, 7],
// answer: 28
// },
// ]




//start quiz function-start timer, hide element, show specific question elements, get question(also a function),
//
function startquiz(){
    
    getquestion()
} 


//going to have get question function

function getquestion(){
    var currentquestion = questions[index];
// change text content of question title, clear out last question

//.innerhtml- removes html element, make "", .innertext- remove text- "", .textcontent- put in text, append element (buttons)
for (var i = 0; i <currentquestion.choices.length; i++ ){
// curentquestion append
//onclick function, calls a function named for question click
}

}
// another question question click
//function questionclick() i++ {called in for loop- get answer recorded,
//endquiz() for time up or highscore
//store highscore, and initial
//submit button, input bar,
//handle form submit, refer to dom elemnt id
//on.click moves to next question, with button associated with it



// 2. How can I get each question to display to the page?
//    -> Is there a way to loop through each question in an array?
//    -> Can we write a for loop that iterates through each object?
// for(var i = 0; i <questionBank.length; i++) {
// var question = questionBank[i].question
// var choices = questionBank[i].choices
// var answers = questionBank[i].answer

//     target some element on the page using querySelector and use textContent to display that question or choices or answers to the page?

// }

// 3. How can I CHECK whether the user picked the right answer?
//    -> Is there a way to click a button?  
//     -> Let's GENERATE an element that is a button
//    -> For each of the button, attach an addEventListener,
//    (put a console.log to know which one I clicked on?)
//    -> And for whichever it is clicked on, check against the answer
//    -> if/else statement

// 4. I NEED A TIMER TO COUNT DOWN
//    -> setInterval!
//    -> Some kind of variable with some random number in it
//    -> We would subtract by 1
//    -> we RUN SOME KIND OF LOGIC INSIDE OF THE COUNTDOWN
//    -> maybe I check the solution to the user input
//    -> If/Else if not correct ,have some penalty (-5)
//    -> What happens if the timer is set to zero?
//    -> Tell you your score AND TAKE YOU TO ANOTHER PAGE

// 4b. HOW DO I CALCULATE MY SCORE YO
// -> I add and subtract somewhere I guess yo idk how do I math? 2 + 2 = 4 - 1 that's 3 quick maffs;
//     Maybe I need to have a variable that keeps track of the score? (global)

// 5a. I want to save my score to the browser
// -> LOCAL STORAGE
// -> After we input in our initials, we want to save our score and our initials to the local storage
// -> localStorage.setItem("userScore", value);
// -> How do we want to save the initial and the high score
// -> {initial: THING WE TYPE, highScore: number}
// localStorage.setItem("userScore", JSON.stringify(object));
// -> How can I DISPLAY IT TO THE SCREEN?
//     -> JSON.parse(localStorage.getItem('userScore'));


var count = 0;

var incrementEl = document.querySelector(".increment");
var decrementEl = document.querySelector(".decrement");
var countEl = document.querySelector("count");

function setCounterText() {
  countEl.textContent = count;
}

incrementEl.addEventListener("click", function() {
  count++;
  setCounterText();
});


decrementEl.addEventListener("click", function() {
  
  if (count > 0) {
    count--;
    setCounterText();
  }

  function setTime() {
    
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left."
      if(secondsLeft === 0) {
        
        clearInterval(timerInterval)
        endquiz();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function endquiz() {
  timeEl.textContent = " ";
  document.querySelector(".question").innerhtml("");
  document.querySelector(".highscore").appendChild(submit);
  document.querySelector(".highscore").appendChild(inputBar)
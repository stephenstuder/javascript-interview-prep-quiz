console.log('It Works!');


//variables
let questionNum = document.querySelector("#question-num");
let question = document.querySelector("#question");
let optionOne = document.querySelector("#option-1")
let optionTwo = document.querySelector("#option-2")
let optionThree = document.querySelector("#option-3")
let optionFour = document.querySelector("#option-4")
let countdownClock = document.querySelector("#countdown");



//for loop for loading the questions 

// question.textContent = "Which of the following is not a datatype of javascript?"
// optionOne.textContent = "boolean";
// optionTwo.textContent = "integer";
// optionThree.textContent = "null";
// optionFour.textContent = "string";

var secondsLeft = 60;

function timerBegin(){
    let quizTime = setInterval(function(){
        secondsLeft--;
        countdownClock.textContent = secondsLeft;

        if (secondsLeft === 0){
            //end the round and collect the score
            clearInterval(countdownClock);
            document.location.href="./leaderboard.html";
        }
    }, 1000);
}

if (window.location.href.match('quiz.html') != null) {
    timerBegin();
    
   }
console.log('It Works!');


//variables
let questionNum = document.querySelector("#question-num");
let question = document.querySelector("#question");
let optionOne = document.querySelector("#option-1")
let optionTwo = document.querySelector("#option-2")
let optionThree = document.querySelector("#option-3")
let optionFour = document.querySelector("#option-4")
let countdownClock = document.querySelector("#countdown");
let optionsParent = document.querySelector("#options-parent");

//defining questions as objects
const q1 = {
    q: "Which of the following is not a datatype of javascript?",
    o1: "null",
    o2: "integer",
    o3: "boolean",
    o4: "string",
    a: "integer"
}
const q2 = {
    q: "What is the HTML tag under which one can write the JavaScript code?",
    o1: "<javascript>",
    o2: "<scripted>",
    o3: "<script>",
    o4: "<js>",
    a: "<script>"
}
const q3 = {
    q: "Which function of an Array object calls a function for each element in the array?",
    o1: "forEach()",
    o2: "every()",
    o3: "forEvery()",
    o4: "each()",
    a: "forEach()"
}
const q4 = {
    q: "JavaScript is a ________ Side Scripting Language.",
    o1: "Server",
    o2: "ISP",
    o3: "Browser",
    o4: "None of the above",
    a: "Browser"
}
const q5 = {
    q: "JavaScript is ________ language.",
    o1: "a compiled",
    o2: "an interpreted",
    o3: "foreign",
    o4: "None of the above",
    a: "an interpreted"
}
const q6 = {
    q: "What is the correct syntax for adding comments in JavaScript?",
    o1: "<!–This is a comment–>",
    o2: "//This is a comment",
    o3: "–This is a comment",
    o4: "**This is a comment**",
    a: "//This is a comment"
}
const q7 = {
    q: "What will be the step of the interpreter in a jump statement when an exception is thrown?",
    o1: "The interpreter stops its work",
    o2: "The interpreter throws another exception",
    o3: "The interpreter jumps to the nearest enclosing exception handler",
    o4: "The interpreter throws an error",
    a: "The interpreter jumps to the nearest enclosing exception handler"
}
const q8 = {
    q: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string?",
    o1: "strip()",
    o2: "trim()",
    o3: "stripped()",
    o4: " trimmed()",
    a: "trim()"
}
const q9 = {
    q: "How does JavaScript store dates in a date object?",
    o1: "The number of milliseconds since January 1st, 1970",
    o2: "The number of days since January 1st, 1900",
    o3: "The number of seconds since Netscape's public stock offering.",
    o4: "None of the above",
    a: "The number of milliseconds since January 1st, 1970"
}
const q10 = {
    q: "What are the three important manipulations done in a for loop on a loop variable?",
    o1: "Updation, Incrementation, Initialization",
    o2: "Initialization,Testing, Updation",
    o3: "Testing, Updation, Testing",
    o4: "Initialization,Testing, Incrementation",
    a: "Initialization,Testing, Updation"
}
var questionBank = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//for loop for loading the questions 

function timerBegin() {
    let quizTime = setInterval(function () {
        secondsLeft--;
        countdownClock.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            //end the round and collect the score
            clearInterval(countdownClock);
            document.location.href = "./leaderboard.html";
        }
    }, 1000);
}

let i = 0;
function loadQuestions() {
    questionNum.textContent = i + 1;
    question.textContent = questionBank[i].q;
    optionOne.textContent = questionBank[i].o1;
    optionTwo.textContent = questionBank[i].o2;
    optionThree.textContent = questionBank[i].o3;
    optionFour.textContent = questionBank[i].o4;
}

optionsParent.addEventListener("click", function (e) {
    e.preventDefault();
    let answer = questionBank[i].a;
    if (e.target.textContent !== answer) {
        deductFiveSeconds();
    } else {
        i++;
        loadQuestions();
    }
});


// Come back here and add the shakey animation
let shakeClock = document.querySelector("#shake-clock-toggle");

function deductFiveSeconds() {
    secondsLeft = secondsLeft - 5;

}

function setScore() {

}

if (window.location.href.match('quiz.html') != null) {
    var secondsLeft = 60;
    timerBegin();
    loadQuestions();
    setScore();
}
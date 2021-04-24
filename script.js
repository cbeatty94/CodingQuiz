var startBtn = document.querySelector("#start-btn")
var timer = document.querySelector("#timer")
var secondsLeft = 100;
var selectedQuestions = document.querySelector("#question")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var quiz = document.querySelector("#quiz")
var submitButton = document.querySelector("#submit")
var localScores = []

var questions = [
    {
        questions: 'Commonly used Data Types do not include:',
        option1: "strings",
        option2: "booleans",
        option3: "alerts",
        option4: "numbers",
        answer: "alerts",
    },{
        questions: 'The condition in an if/else statement is enclosed within _______.',
        option1: "Quotes",
        option2: "Curly Brackets",
        option3: "Parenthesis",
        option4: "Square Brackets",
        answer: "Curly Brackets", 
    },{
        questions: 'Arrays in JavaScript can be used to store _____.',
        option1: "Numbers and Strings",
        option2: "Other Arrays",
        option3: "Booleans",
        option4: "All the above",
        answer: "All the above", 
    },{
        questions: 'String values must be enclosed within _______ when being assigned to variables.',
        option1: "Commas",
        option2: "Curly Brackets",
        option4: "Quotes",
        option3: "Parenthesis",
        answer: "Parenthesis", 
    },{
        questions: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        option1: "Javascript",
        option2: "Terminal/Bash",
        option4: "For Loops",
        option3: "Console.log",
        answer: "Console.log", 
    },
]


startBtn.addEventListener('click',function() {
    console.log(startBtn);
    document.querySelector("#start-btn").hidden=true;
    document.querySelector("#quiz").hidden=true;
    document.getElementsByTagName("div")[0].style.display= "block";
    document.getElementById('score').style.display= 'none'
    setTime();
    nextQuestion();
})

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
        if (secondsLeft >= 0) {
            span = document.querySelector("#timer")
            span.innerHTML = secondsLeft
        }
        if(secondsLeft === 0) {
            alert("Out of time!!")
            clearInterval(timerInterval);
        }
    }, 1000);
}


var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0
var finalScore = document.getElementById('score')
var scoreForm = document.getElementById('scoreForm')
var container = document.querySelector('.container')

function nextQuestion() {
    if(runningQuestionIndex > lastQuestionIndex) {
        timer.style.display = 'none'
        container.style.display = 'none'
        scoreForm.style.display = "block"
        finalScore.style.display = "block"
        finalScore.innerHTML = "Your final score" + " " + secondsLeft
        clearInterval(timerInterval);
    } else {
        var q = questions[runningQuestionIndex]
        selectedQuestions.innerHTML = q.questions
        option1.innerHTML = q.option1
        option2.innerHTML = q.option2
        option3.innerHTML = q.option3
        option4.innerHTML = q.option4
    }
}

function checkAnswer(answer){
    if(questions[runningQuestionIndex].answer === answer){
        runningQuestionIndex++
        nextQuestion()
    } else {
        secondsLeft = secondsLeft - 10
        runningQuestionIndex++
        nextQuestion()
    }
}

function localStorageScores(){
    var initials = document.getElementById('initials').value;
    var checkLocal = JSON.parse(localStorage.getItem('scores'));

    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    if (checkLocal === null) {
        localScores = [{
            playerInitials: initials.trim(),
            userScore: secondsLeft}]
    
        } else {
            localScores = checkLocal.concat([{
                playerInitials: initials.trim(),
                userScore: secondsLeft}])
        }
        localStorage.setItem('scores', JSON.stringify(localScores))
}    






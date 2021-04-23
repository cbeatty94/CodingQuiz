var startBtn = document.querySelector("#start-btn")
var questionContainer = document.querySelector("#question-container")
var nextBtn = document.querySelector("#next-btn")
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector("#answer-btn")
var selectedQuestions = document.querySelector("#question")
var option1 = document.querySelector("#option1")
var option2 = document.querySelector("#option2")
var option3 = document.querySelector("#option3")
var option4 = document.querySelector("#option4")
var quiz = document.querySelector("#quiz")
var submitButton = document.querySelector("#submit")

var questions = [
    {
        question: 'Commonly used Data Types do not include:',
        option1: "strings",
        option2: "booleans",
        option3: "alerts",
        option4: "numbers",
        answer: "alerts",
        
        question: 'The condition in an if/else statement is enclosed within _______.',
        option1: "Quotess",
        option2: "Curly Brackets",
        option3: "Parenthesis",
        option4: "Square Brackets",
        answer: "Curly Brackets", 
    }
]


startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', nextQuestion)


function startQuiz() {
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    // document.querySelector("#question")[0].style.display="block";
    setTime()
    nextQuestion()
}

function nextQuestion() {
    

}

function selectAnswer() {


}

var lastQuestionIndex = questions.length - 1
var runningQuestionIndex = 0

function showQuestions() {
    if(runningQuestionIndex > lastQuestionIndex) {
        startQuiz.style.display = "none"
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
        showQuestions()
    } else {
        secondsLeft = secondsLeft - 10
        runningQuestionIndex++
        showQuestions()
    }
}


const questions=[
    {
        question: "What is the correct way to declare a JavaScript variable?",
        answers: [
            {text: "var x;", correct: true},
            {text: "variable x;", correct: false},
            {text: "x = 5;", correct: false},
            {text: "int x;", correct: false},
        ]
    },
    {
        question: "Which of the following methods is used to add an element at the end of an array in JavaScript?",
        answers: [
            {text: "push()", correct: true},
            {text: "join()", correct: false},
            {text: "pop()", correct: false},
            {text: "shift()", correct: false},
        ]
    },
    {
        question: "Which statement is used to exit a loop in JavaScript?",
        answers: [
            {text: " continue", correct: true},
            {text: "exit", correct: false},
            {text: "return", correct: false},
            {text: "break", correct: false},
        ]
    },
    {
        question: " Which of the following is a valid JavaScript event handler??",
        answers: [
            {text: "onclick", correct: true},
            {text: "onhover", correct: false},
            {text: " onscroll", correct: false},
            {text: "ondrag", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            {text: "It refers to the current HTML document", correct: false},
            {text: "It refers to the previous function call.", correct: false},
            {text: "It refers to the global object.", correct: false},
            {text: " It refers to the object that owns the executing code.", correct: true},
        ]
    },
    {
        question: "Which function is used to convert a string to a floating-point number in JavaScript?",
        answers: [
            {text: "parseFloat()", correct: true},
            {text: " toFloat()", correct: false},
            {text: "parseDouble()", correct: false},
            {text: "toDouble()", correct: false},
        ]
    },
    {
        question: "What is the result of the following expression in JavaScript: 10 + '5'?",
        answers: [
            {text: "105", correct: false},
            {text: "15", correct: true},
            {text: "1050", correct: false},
            {text: "14", correct: false},
        ]
    },
    {
        question: "What does the 'NaN' abbreviation stand for in JavaScript?",
        answers: [
            {text: "Not a Number", correct: true},
            {text: "Null and None", correct: false},
            {text: " Negative or Null.", correct: false},
            {text: " No Available Number", correct: false},
        ]
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            {text: "remove()", correct: false},
            {text: " pop()", correct: true},
            {text: " delete()", correct: false},
            {text: " splice()", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: [
            {text: " It checks if a variable is undefined.", correct: false},
            {text: "It returns the type of a variable.", correct: true},
            {text: " It checks if a variable is null.", correct: false},
            {text: " It returns the size of a variable.", correct: false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
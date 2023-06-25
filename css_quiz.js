const questions=[
    {
        question: "What is the correct CSS syntax to select an element with an id of \"example\"",
        answers: [
            {text: "#example", correct: true},
            {text: ".example", correct: false},
            {text: "<example>", correct: false},
            {text: "example", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            {text: "color", correct:false},
            {text: "background-color", correct: true},
            {text: "text-color", correct: false},
            {text: " fill-color", correct: false},
        ]
    },
    {
        question: "How do you center align text horizontally in CSS?",
        answers: [
            {text: " text-align: left;", correct: false},
            {text: "text-align: right;", correct: false},
            {text: "text-align: center", correct: true},
            {text: "text-align: justify", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to set the spacing between lines of text? ",
        answers: [
            {text: "line-height", correct: true},
            {text: "letter-spacing", correct: false},
            {text: "word-spacing", correct: false},
            {text: "spacing", correct: false},
        ]
    },
    {
        question: "How do you specify a font in CSS?",
        answers: [
            {text: "font-weight", correct: false},
            {text: "font-family", correct: true},
            {text: "font-size", correct: false},
            {text: " font-style", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to create rounded corners on an element?",
        answers: [
            {text: "border-radius", correct: true},
            {text: " corner-radius", correct: false},
            {text: " box-radius", correct: false},
            {text: "border-style", correct: false},
        ]
    },
    {
        question: "How do you select all paragraphs within a div element with the class \"container\"?",
        answers: [
            {text: " div p", correct: false},
            {text: ".container p", correct: true},
            {text: "div.container p", correct: false},
            {text: "#container p", correct: false},
        ]
    },
    {
        question: "What is the correct CSS syntax to change the font color of a link when hovered over?",
        answers: [
            {text: " a:active", correct: false},
            {text: "a:hover", correct: true},
            {text: " a:visited", correct: false},
            {text: " a:focus", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        answers: [
            {text: "margin", correct: true},
            {text: "padding", correct: false},
            {text: "spacing", correct: false},
            {text: "position", correct: false},
        ]
    },
    {
        question: "How do you hide an element in CSS?",
        answers: [
            {text: "visibility: hidden;", correct: false},
            {text: "display: none;", correct: true},
            {text: " opacity: 0;", correct: false},
            {text: "hidden: true;", correct: false},
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
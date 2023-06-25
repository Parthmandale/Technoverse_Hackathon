const questions=[
    {
        question: "What does HTML stand for??",
        answers: [
            {text: "Hyper Text Markup Language;", correct: true},
            {text: "Hyperlinks and Text Markup Language;", correct: false},
            {text: "Home Tool Markup Language;", correct: false},
            {text: "Hyper Text Modeling Language;", correct: false},
        ]
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        answers: [
            { text:"a", correct: true},
            {text: " link", correct: false},
            {text: "url", correct: false},
            {text: "hyperlink", correct: false},
        ]
    },
    {
        question: "Which attribute is used to specify an image source in HTML?",
        answers: [
            {text: "img-src", correct: true},
            {text: "src", correct: false},
            {text: "href", correct: false},
            {text: " source", correct: false},
        ]
    },
    {
        question: " Which HTML tag is used to define a table row?",
        answers: [
            {text: "tr", correct: true},
            {text: "td", correct: false},
            {text: " th", correct: false},
            {text: "table", correct: false},
        ]
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        answers: [
            {text: "hr", correct: false},
            {text: "lb", correct: false},
            {text: "break", correct: false},
            {text: " br", correct: true},
        ]
    },
    {
        question: "Which attribute is used to define inline styles in HTML?",
        answers: [
            {text: "style", correct: true},
            {text: " class", correct: false},
            {text: "id", correct: false},
            {text: "inline", correct: false},
        ]
    },
    {
        question: "What does the 'alt' attribute in the <img> tag specify?",
        answers: [
            {text: "The title of the image", correct: false},
            {text: "The URL of the image", correct: true},
            {text: "The alternative text for the image", correct: false},
            {text: "The image width and height", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define the header of a document or section?",
        answers: [
            {text: "header", correct: true},
            {text: "h1", correct: false},
            {text: "head", correct: false},
            {text: "title", correct: false},
        ]
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        answers: [
            {text: "h2", correct: false},
            {text: "h1", correct: true},
            {text: "h3", correct: false},
            {text: "h4", correct: false},
        ]
    },
    {
        question: "What does the table element represent in HTML?",
        answers: [
            {text: "A section that contains metadata for the document", correct: false},
            {text: " A container for tabular data", correct: true},
            {text: "A section that contains navigation links", correct: false},
            {text: "A container for the main content of the document", correct: false},
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
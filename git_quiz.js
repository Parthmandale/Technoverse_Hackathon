const questions=[
    {
        question: "Which command is used to create a new branch in Git?",
        answers: [
            {text: "git add", correct: false},
            {text: "git commit;", correct: false},
            {text: " git branch", correct: true},
            {text: "git merge", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'git clone' command?",
        answers: [
            {text: "Push changes to a remote repository", correct: false},
            {text: " Fetch changes from a remote repository", correct: false},
            {text: "Create a local copy of a remote repository", correct: true},
            {text: "Merge branches in a repository", correct: false},
        ]
    },
    {
        question: "What is the Git command to discard changes in a file and revert it to the last committed state?",
        answers: [
            {text: " git restore", correct: false},
            {text: "git reset", correct: true},
            {text: "git checkout", correct: false},
            {text: "git revert", correct: false},
        ]
    },
    {
        question: " How do you undo the last Git commit without losing the changes?",
        answers: [
            {text: "git undo", correct: false},
            {text: " git reset", correct: true},
            {text: "git revert", correct: false},
            {text: "git commit --amend", correct: false},
        ]
    },
    {
        question: "Which command is used to view the commit history in Git?",
        answers: [
            {text: "git log", correct: true},
            {text: "git status", correct: false},
            {text: "git diff.", correct: false},
            {text: "git checkout", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'git pull' command?",
        answers: [
            {text: "Push changes to a remote repository", correct: false},
            {text: " Fetch changes from a remote repository", correct: true},
            {text: "Create a local copy of a remote repository", correct: false},
            {text: "Merge branches in a repository", correct: false},
        ]
    },
    {
        question: "What command is used to stage changes for a commit in Git?",
        answers: [
            {text: "git push", correct: false},
            {text: "git add", correct: true},
            {text: "git commit", correct: false},
            {text: "git branch", correct: false},
        ]
    },
    {
        question: "How do you create a new Git repository from an existing",
        answers: [
            {text: "git clone", correct: false},
            {text: "git init", correct: true},
            {text: "git branch", correct: false},
            {text: "git merge", correct: false},
        ]
    },
    {
        question: "How can you discard all local changes in your Git repository?",
        answers: [
            {text: " git reset --hard", correct: true},
            {text: " git clean -f", correct: false},
            {text: " git discard", correct: false},
            {text: " git revert", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'git push' command?",
        answers: [
            {text: " Fetch changes from a remote repository", correct: false},
            {text: " Create a local copy of a remote repository", correct: false},
            {text: " Push changes to a remote repository", correct: true},
            {text: " Merge branches in a repository", correct: false},
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
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "A function in javascript must have a return statement",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Function in javascrpt can return another function",
        options: ["True", "False"],
        answer: "True"   
    },
    {
        question: "Function expressions are hoisted like function declaration",
        options: ["True", "False"],
        answer: "False"  
    },
    {
        question: "Javascript functions can have default parameter values",
        options: ["True", "False"],
        answer: "True"    
    },
    {
        question: "Function in javascript can be stored in variables",
        options: ["True", "False"],
        answer: "True"      
    }
];

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("retry-btn").style.display = "none";
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
    
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("result").innerHTML = `Quiz Over! Your score: ${score}/${questions.length}`;
        document.getElementById("retry-btn").style.display = "block";
        return;
    }
    
    const questionObj = questions[currentQuestionIndex];
    const questionElement = document.createElement("h2");
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);
    
    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        quizContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

document.getElementById("retry-btn").style.display = "none";
startQuiz();
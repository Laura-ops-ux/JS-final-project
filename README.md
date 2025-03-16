1. HTML Structure (User Interface)
Title & Main Container:
The quiz is wrapped inside a <div class="container"> with a title "Quiz App".
Quiz Section (#quiz):
Displays a question inside <div id="question">.
Multiple choice options inside <div id="options"> where buttons are dynamically created.
A Next button (#nextBtn), which appears only after selecting an answer.
Result Section (#result):
Shows the final score in <h2>Your Score: <span id="score"></span></h2>.
A Retry button (#retryBtn) to restart the quiz.
Audio Elements:
clapSound: Plays applause when the user answers correctly.
failSound: Plays a beep when the user answers incorrectly.
2. CSS (Styling)
The body has a gradient background.
The .container has a white background, rounded corners, and a shadow.
Buttons have a red background (#ff6f61) that turns darker red (#ff3b2f) on hover.
The Next and Retry buttons are green (#4CAF50).
.hidden class is used to hide elements dynamically.
3. JavaScript (Functionality)
A. Quiz Data (Questions & Answers)
js
Copy
Edit
const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" }
];
Stores a list of questions, multiple-choice options, and the correct answer.
B. Load a Question
js
Copy
Edit
function loadQuestion() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    questionEl.innerText = quizData[currentQuestion].question;
    optionsEl.innerHTML = "";  // Clear previous options
    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });

    nextBtn.classList.add("hidden");
}
Displays the current question and creates buttons for each option.
Hides the Next button initially.
C. Checking the Answer
js
Copy
Edit
function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("clapSound").play();
        confettiAnimation();
        alert("Correct!");
    } else {
        document.getElementById("failSound").play();
        alert("Wrong! The correct answer is " + correctAnswer);
    }
    document.getElementById("nextBtn").classList.remove("hidden");
}
Compares the selected answer with the correct one.
If correct:
Increases the score.
Plays a clapping sound.
Shows a confetti animation.
If wrong:
Plays a failure sound.
Alerts the correct answer.
Shows the "Next" button after selecting an answer.
D. Moving to the Next Question
js
Copy
Edit
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
Moves to the next question.
If all questions are done, it displays the final score.
E. Displaying the Final Score
js
Copy
Edit
function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = ${score} / ${quizData.length};
}
Hides the quiz and shows the final score.
F. Restarting the Quiz
js
Copy
Edit
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}
Resets the score and question counter and reloads the quiz.

const questions = [
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: "Who is the captain of India?",
        answers: [
            { text: "Rohit Sharma", correct: true },
            { text: "Virat Kohli", correct: false },
            { text: "MS Dhoni", correct: false },
            { text: "Anil Kumble", correct: false },
        ]
    },
    {
        question: "Which city has the highest population in China?",
        answers: [
            { text: "Shanghai", correct: true },
            { text: "Beijing", correct: false },
            { text: "Guangzhou", correct: false },
            { text: "Tianjin", correct: false },
        ]
    },
    {
        question: "Who won the 2019 World Cup for England?",
        answers: [
            { text: "Joe Root", correct: true },
            { text: "Chris Woakes", correct: false },
            { text: "Andrew Tye", correct: false },
            { text: "James Anderson", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question2");
const answerButtons = document.getElementById("answerbuttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.dataset.index = index;
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedIndex = e.target.dataset.index;
    const isCorrect = questions[currentQuestionIndex].answers[selectedIndex].correct;

    if (isCorrect) {
        e.target.classList.add("correct");
        score++;
    } else {
        e.target.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = `You scored ${score} out of ${questions.length} questions.`;
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", nextQuestion);

startQuiz();

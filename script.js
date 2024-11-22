let questions = [
    {
        question: "What is the capital of France?",
        correct_answer: "Paris",
        incorrect_answers: ["Berlin", "Madrid", "Rome"]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        correct_answer: "Japan",
        incorrect_answers: ["China", "Thailand", "Vietnam"]
    },
    {
        question: "Which country has the largest population?",
        correct_answer: "China",
        incorrect_answers: ["India", "USA", "Russia"]
    },
    {
        question: "What is the capital of Ghana?",
        correct_answer: "Accra",
        incorrect_answers: ["Tema", "Abidjan", "Lagos"]
    },
    {
        question: "Which country is famous for its chocolate?",
        correct_answer: "Germany",
        incorrect_answers: ["France ", "Belgium", "Italy"]
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    if (currentQuestion >= questions.length) {
        document.getElementById("ques").innerHTML = "Quiz Finished!";
        document.getElementById("score").innerHTML = `Your score: ${score}/${questions.length}`;
        document.getElementById("opt").innerHTML = "";
        document.getElementById("btn").remove();
        return;
    }

    const quiz = document.getElementById("ques");
    const optionsContainer = document.getElementById("opt");

    quiz.innerHTML = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    const options = [
        ...questions[currentQuestion].incorrect_answers,
        questions[currentQuestion].correct_answer,
    ];
    options.sort(() => Math.random() - 0.5); // Shuffle options

    options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `<input type="radio" name="choice" value="${option}"> ${option}`;
        optionsContainer.appendChild(optionElement);
    });
}

function checkAns() {
    const choices = document.getElementsByName("choice");
    let selectedOption;
    for (const choice of choices) {
        if (choice.checked) {
            selectedOption = choice.value;
            break;
        }
    }

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption === questions[currentQuestion].correct_answer) {
        score++;
    }

    currentQuestion++;
    loadQuiz();
}

// Load the first question
loadQuiz();

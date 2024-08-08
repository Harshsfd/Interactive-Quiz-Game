const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const startButton = document.getElementById('start-button'); // Add a start button

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hypertext Management Language", correct: false },
            { text: "Hypertext Markdown Language", correct: false },
            { text: "Hightext Markup Language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "<style>", correct: true },
            { text: "<script>", correct: false },
            { text: "<css>", correct: false },
            { text: "<link>", correct: false }
        ]
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        answers: [
            { text: "font-family", correct: true },
            { text: "font-style", correct: false },
            { text: "font-size", correct: false },
            { text: "text-font", correct: false }
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: "alt", correct: true },
            { text: "src", correct: false },
            { text: "title", correct: false },
            { text: "longdesc", correct: false }
        ]
    },
    {
        question: "What does JavaScript use to declare variables?",
        answers: [
            { text: "var, let, const", correct: true },
            { text: "int, float, char", correct: false },
            { text: "define, declare", correct: false },
            { text: "new, old", correct: false }
        ]
    },
    {
        question: "Which method is used to write data to the console in JavaScript?",
        answers: [
            { text: "console.log()", correct: true },
            { text: "console.print()", correct: false },
            { text: "console.write()", correct: false },
            { text: "console.display()", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "What is the default display value of a block-level element?",
        answers: [
            { text: "block", correct: true },
            { text: "inline", correct: false },
            { text: "flex", correct: false },
            { text: "none", correct: false }
        ]
    },
    {
        question: "Which HTML5 element defines navigation links?",
        answers: [
            { text: "<nav>", correct: true },
            { text: "<links>", correct: false },
            { text: "<navigate>", correct: false },
            { text: "<menu>", correct: false }
        ]
    },
    {
        question: "How can you include external JavaScript code in an HTML file?",
        answers: [
            { text: "<script src='file.js'></script>", correct: true },
            { text: "<js src='file.js'></js>", correct: false },
            { text: "<link src='file.js' type='text/javascript'>", correct: false },
            { text: "<import src='file.js'>", correct: false }
        ]
    },
    {
        question: "What method is used to remove the last element from an array in JavaScript?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "push()", correct: false },
            { text: "splice()", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            { text: "line-height", correct: true },
            { text: "letter-spacing", correct: false },
            { text: "word-spacing", correct: false },
            { text: "text-indent", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define a list item?",
        answers: [
            { text: "<li>", correct: true },
            { text: "<item>", correct: false },
            { text: "<list>", correct: false },
            { text: "<ul>", correct: false }
        ]
    },
    {
        question: "What does the 'padding' property do in CSS?",
        answers: [
            { text: "Adds space inside the border of an element", correct: true },
            { text: "Adds space outside the border of an element", correct: false },
            { text: "Sets the border color of an element", correct: false },
            { text: "Sets the margin of an element", correct: false }
        ]
    },
    {
        question: "How can you create a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "/* This is a comment */", correct: false },
            { text: "# This is a comment", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "What does the 'display: flex' property do in CSS?",
        answers: [
            { text: "Makes an element a flex container", correct: true },
            { text: "Sets an element's display to block", correct: false },
            { text: "Aligns elements to the center", correct: false },
            { text: "Adds a margin to the element", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'data-' attribute in HTML?",
        answers: [
            { text: "To store custom data in an element", correct: true },
            { text: "To define a style for an element", correct: false },
            { text: "To include external resources", correct: false },
            { text: "To define element IDs", correct: false }
        ]
    },
    {
        question: "Which method in JavaScript is used to add an element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "unshift()", correct: false },
            { text: "splice()", correct: false }
        ]
    },
    // {
    //     question: "Which CSS property is used to change the background color of an element?",
    //     answers: [
    //         { text: "background-color", correct: true },
    //         { text: "bgcolor", correct: false },
    //         { text: "color", correct: false },
    //         { text: "background", correct: false }
    //     ]
    // },
    // {
    //     question: "How do you include comments in CSS?",
    //     answers: [
    //         { text: "/* This is a comment */", correct: true },
    //         { text: "// This is a comment", correct: false },
    //         { text: "<!-- This is a comment -->", correct: false },
    //         { text: "# This is a comment", correct: false }
    //     ]
    // },
    // {
    //     question: "Which HTML attribute specifies the URL of an image?",
    //     answers: [
    //         { text: "src", correct: true },
    //         { text: "href", correct: false },
    //         { text: "alt", correct: false },
    //         { text: "link", correct: false }
    //     ]
    // }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20 * 60; // 20 minutes in seconds

startButton.addEventListener('click', startGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 20 * 60; // Reset timer to 20 minutes
    nextButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    startButton.classList.add('hide'); // Hide the start button after game starts
    
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionContainer.querySelector('#question').innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
    nextButton.classList.remove('hide');
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
        feedback.innerText = 'Correct!';
    } else {
        feedback.innerText = 'Wrong!';
    }
    scoreElement.innerText = score;
    setTimeout(nextQuestion, 100); // Delay nextQuestion by 1 second
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    questionContainer.classList.add('hide');
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    if (score >= 15) {
        resultMessage.innerText = `Congratulations! Your final score is ${score}/20. You have passed the test.`;
    } else {
        resultMessage.innerText = `Better luck next time. Your final score is ${score}/20.`;
    }
    clearInterval(timer); // Stop the timer
    retakeButton.classList.remove('hide'); // Show the retake button
}

// Quiz Data - Organized by difficulty levels
const quizData = {
    beginner: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Tool Multi Language"
            ],
            answer: 0
        },
        {
            question: "Which HTML tag is used to link an external CSS file?",
            options: ["<style>", "<css>", "<link>", "<script>"],
            answer: 2
        },
        {
            question: "Which CSS property changes the text color?",
            options: ["text-color", "font-color", "color", "text-style"],
            answer: 2
        },
        {
            question: "Where is the correct place to insert JavaScript in HTML?",
            options: ["<head>", "<body>", "Both <head> and <body>", "In a separate file only"],
            answer: 2
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image?",
            options: ["title", "src", "alt", "href"],
            answer: 2
        },
        {
            question: "What tag is used to create a paragraph in HTML?",
            options: ["<p>", "<para>", "<text>", "<div>"],
            answer: 0
        },
        {
            question: "How do you make text bold in HTML?",
            options: ["<bold>", "<b>", "<strong>", "<em>"],
            answer: 2
        }
    ],
    intermediate: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: 2
        },
        {
            question: "Which HTML5 element is used for playing video files?",
            options: ["<media>", "<video>", "<movie>", "<play>"],
            answer: 1
        },
        {
            question: "What is the correct syntax for referring to an external script called 'app.js'?",
            options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
            answer: 2
        },
        {
            question: "How do you select an element with id 'demo' in CSS?",
            options: [".demo", "#demo", "demo", "*demo"],
            answer: 1
        },
        {
            question: "Which property is used to change the font of an element?",
            options: ["font-family", "font-style", "font-weight", "text-font"],
            answer: 0
        },
        {
            question: "What is the default position value in CSS?",
            options: ["relative", "absolute", "static", "fixed"],
            answer: 2
        },
        {
            question: "How do you center a block element horizontally in CSS?",
            options: ["margin: auto", "padding: center", "text-align: center", "align: middle"],
            answer: 0
        }
    ],
    advanced: [
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "It refers to the current function",
                "It refers to the previous object",
                "It refers to the global object",
                "It refers to the current object"
            ],
            answer: 3
        },
        {
            question: "Which method is used to convert JSON data to a JavaScript object?",
            options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
            answer: 0
        },
        {
            question: "Which method is used to add a new element to the end of an array?",
            options: ["push()", "pop()", "shift()", "unshift()"],
            answer: 0
        },
        {
            question: "What does the '===' operator do in JavaScript?",
            options: ["Compares both value and type", "Assigns a value", "Checks only value", "Compares memory location"],
            answer: 0
        },
        {
            question: "How can you prevent a form from submitting in JavaScript?",
            options: ["form.prevent()", "event.preventDefault()", "stopDefault()", "return false"],
            answer: 1
        },
        {
            question: "Which function is used to delay execution of a function?",
            options: ["setDelay()", "setTimeout()", "pause()", "wait()"],
            answer: 1
        },
        {
            question: "What is the output of typeof NaN?",
            options: ["NaN", "undefined", "number", "object"],
            answer: 2
        },
        {
            question: "Which loop is guaranteed to run at least once?",
            options: ["for", "while", "do-while", "foreach"],
            answer: 2
        },
        {
            question: "What does 'use strict' do in JavaScript?",
            options: ["Enables newer features", "Adds extra security", "Enforces strict parsing", "Fixes syntax"],
            answer: 2
        },
        {
            question: "How do you create a class in JavaScript?",
            options: ["function MyClass()", "new class MyClass", "class MyClass {}", "MyClass.create()"],
            answer: 2
        }
    ],
    expert: Array.from({ length: 15 }, (_, i) => ({
        question: `Expert question ${i + 1}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: 1
    }))
};


// DOM Elements
const levelSelection = document.getElementById('levelSelection');
const quizArea = document.getElementById('quizArea');
const resultsArea = document.getElementById('resultsArea');
const levelButtons = document.querySelectorAll('.level-btn');
const levelIndicator = document.getElementById('levelIndicator');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const questionCounter = document.getElementById('questionCounter');
const scoreElement = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');
const finalScore = document.getElementById('finalScore');
const performanceComment = document.getElementById('performanceComment');
const restartBtn = document.getElementById('restartBtn');

// Quiz Variables
let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let quizQuestions = [];

// Initialize the quiz
function initQuiz() {
    // Hide all sections first
    levelSelection.classList.remove('active');
    quizArea.classList.remove('active');
    resultsArea.classList.remove('active');
    
    // Show level selection
    levelSelection.classList.add('active');
    
    // Reset quiz variables
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
}

// Start quiz with selected level
function startQuiz(level) {
    currentLevel = level;
    quizQuestions = [...quizData[level]]; // Create a copy of the questions
    
    // Update UI
    levelSelection.classList.remove('active');
    quizArea.classList.add('active');
    levelIndicator.textContent = `Level: ${level.charAt(0).toUpperCase() + level.slice(1)}`;
    scoreElement.textContent = `Score: ${score}`;
    
    // Load first question
    loadQuestion();
}

// Load question
function loadQuestion() {
    resetState();
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${quizQuestions.length}`;
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', selectOption);
        optionsContainer.appendChild(button);
    });
    
    nextBtn.disabled = true;
}

// Reset question state
function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    
    selectedOption = null;
    nextBtn.classList.remove('show-answer');
    nextBtn.textContent = 'Next Question';
}

// Select option
function selectOption(e) {
    if (selectedOption !== null) return;
    
    selectedOption = parseInt(e.target.dataset.index);
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    
    // Highlight selected option
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        option.classList.remove('selected');
        option.disabled = true;
    });
    
    e.target.classList.add('selected');
    
    // Highlight correct answer
    options[correctAnswer].classList.add('correct');
    
    // If wrong answer, highlight the selected option as incorrect
    if (selectedOption !== correctAnswer) {
        e.target.classList.add('incorrect');
    } else {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    
    nextBtn.disabled = false;
}

// Show next question or results
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    quizArea.classList.remove('active');
    resultsArea.classList.add('active');
    
    finalScore.textContent = `Your score: ${score}/${quizQuestions.length}`;
    
    // Performance comment
    const percentage = (score / quizQuestions.length) * 100;
    let comment = '';
    
    if (percentage >= 80) {
        comment = 'Excellent work! You really know your stuff!';
    } else if (percentage >= 60) {
        comment = 'Good job! With a bit more practice you\'ll master this level.';
    } else if (percentage >= 40) {
        comment = 'Not bad! Review the topics and try again.';
    } else {
        comment = 'Keep practicing! You\'ll get better with time.';
    }
    
    performanceComment.textContent = comment;
}

// Event Listeners
levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        startQuiz(button.dataset.level);
    });
});

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', initQuiz);

// Initialize the quiz when page loads
window.addEventListener('DOMContentLoaded', initQuiz);
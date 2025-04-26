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
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: ["<break>", "<lb>", "<br>", "<newline>"],
            answer: 2
        },
        {
            question: "Which HTML tag is used to create an unordered list?",
            options: ["<ul>", "<ol>", "<list>", "<dl>"],
            answer: 0
        },
        {
            question: "What is the default display property value for a <div> element?",
            options: ["inline", "block", "inline-block", "none"],
            answer: 1
        },
        {
            question: "How do you add a background color in CSS?",
            options: ["bg-color:", "background-color:", "color-background:", "bgcolor:"],
            answer: 1
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["text-size", "font-size", "text-style", "font-style"],
            answer: 1
        },
        {
            question: "What is the correct way to declare a JavaScript variable?",
            options: ["variable name;", "v name;", "let name;", "var: name;"],
            answer: 2
        },
        {
            question: "How do you write a comment in JavaScript?",
            options: ["<!-- comment -->", "/* comment */", "// comment", "# comment"],
            answer: 2
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: ["=", "==", "===", ":="],
            answer: 0
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
        },
        {
            question: "What is the purpose of the 'async' attribute in script tags?",
            options: [
                "Makes script load faster",
                "Loads script asynchronously while HTML parsing continues",
                "Executes script in reverse order",
                "Prevents script from loading"
            ],
            answer: 1
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: ["pop()", "push()", "shift()", "unshift()"],
            answer: 0
        },
        {
            question: "What is the difference between let and var?",
            options: [
                "No difference",
                "let has block scope, var has function scope",
                "var is newer than let",
                "let is only for numbers"
            ],
            answer: 1
        },
        {
            question: "How do you declare a CSS variable?",
            options: [
                "@variable",
                "$variable",
                "--variable",
                "#variable"
            ],
            answer: 2
        },
        {
            question: "What is the purpose of the localStorage object?",
            options: [
                "To store data temporarily",
                "To store data permanently in the browser",
                "To store server data",
                "To store cookies"
            ],
            answer: 1
        },
        {
            question: "Which event occurs when a user clicks on an HTML element?",
            options: ["onmouseclick", "onclick", "onpress", "clickevent"],
            answer: 1
        },
        {
            question: "What is the correct way to write a ternary operator?",
            options: [
                "condition ? true : false",
                "if ? then : else",
                "condition ? then : else",
                "if(condition) ? true : false"
            ],
            answer: 0
        },
        {
            question: "How do you make a CSS grid container?",
            options: [
                "display: grid-container",
                "display: grid",
                "grid: true",
                "container: grid"
            ],
            answer: 1
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
    expert: [
        {
            question: "What is the difference between microtasks and macrotasks in JavaScript's event loop?",
            options: [
                "Microtasks execute before macrotasks in each event loop cycle",
                "Macrotasks execute before microtasks in each event loop cycle",
                "There is no difference, they are the same",
                "Microtasks only run in Node.js"
            ],
            answer: 0
        },
        {
            question: "What is a JavaScript Generator function and how is it declared?",
            options: [
                "A function that generates random numbers, declared with gen keyword",
                "A function that can be paused and resumed, declared with function*",
                "A function that creates other functions, declared with create keyword",
                "A function that only generates arrays, declared with array keyword"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the WeakMap object in JavaScript?",
            options: [
                "To create a map with weak encryption",
                "To store key-value pairs where keys must be objects and are weakly referenced",
                "To create a map that automatically deletes old entries",
                "To store only primitive values as keys"
            ],
            answer: 1
        },
        {
            question: "What is the difference between Object.seal() and Object.freeze()?",
            options: [
                "They are identical in functionality",
                "Seal prevents adding/deleting properties, freeze also prevents modifying existing properties",
                "Freeze prevents adding/deleting properties, seal also prevents modifying existing properties",
                "Seal only works on arrays, freeze works on all objects"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the Symbol.iterator in JavaScript?",
            options: [
                "To create unique object properties",
                "To define how an object should be converted to a primitive",
                "To specify the default iterator for an object",
                "To create private object methods"
            ],
            answer: 2
        },
        {
            question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
            options: [
                "A period where garbage collection occurs",
                "The time between variable declaration and initialization where let/const cannot be accessed",
                "A zone where async code is executed",
                "A special scope for setTimeout functions"
            ],
            answer: 1
        },
        {
            question: "How does the JavaScript engine optimize tail-recursive functions?",
            options: [
                "By converting them to loops automatically",
                "By caching their results",
                "By eliminating the need for additional stack frames in proper tail calls",
                "By running them in parallel"
            ],
            answer: 2
        },
        {
            question: "What is the purpose of the Proxy object in JavaScript?",
            options: [
                "To create a secure connection to a server",
                "To define custom behavior for fundamental operations like property lookup and assignment",
                "To proxy network requests through a different server",
                "To cache function results"
            ],
            answer: 1
        },
        {
            question: "What is the difference between Observable and Promise in async programming?",
            options: [
                "Observables can emit multiple values over time, Promises resolve once",
                "Promises can emit multiple values, Observables resolve once",
                "They are identical in functionality",
                "Observables are synchronous, Promises are asynchronous"
            ],
            answer: 0
        },
        {
            question: "What is the purpose of the globalThis property in JavaScript?",
            options: [
                "To access only global variables",
                "To provide a standard way to access the global object across environments",
                "To create global variables",
                "To prevent access to global scope"
            ],
            answer: 1
        },
        {
            question: "What is the difference between Shadow DOM and Virtual DOM?",
            options: [
                "They are the same thing",
                "Shadow DOM encapsulates DOM trees, Virtual DOM optimizes rendering",
                "Virtual DOM is for web components, Shadow DOM is for React",
                "Shadow DOM is deprecated, Virtual DOM is modern"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the queueMicrotask() function?",
            options: [
                "To schedule a task for the next event loop iteration",
                "To queue a task to be executed in the microtask queue",
                "To create a new worker thread",
                "To optimize async operations"
            ],
            answer: 1
        },
        {
            question: "What is the difference between Object.create(null) and {}?",
            options: [
                "They are identical",
                "Object.create(null) creates an object with no prototype chain",
                "Object.create(null) is faster",
                "{} creates an object with no prototype chain"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the private class fields (#) syntax in JavaScript?",
            options: [
                "To make properties read-only",
                "To create truly private class members that cannot be accessed from outside",
                "To optimize property access",
                "To mark deprecated features"
            ],
            answer: 1
        },
        {
            question: "What is the difference between WebAssembly and JavaScript?",
            options: [
                "They are the same thing",
                "WebAssembly is a low-level binary format designed to run at near-native speed",
                "JavaScript is newer than WebAssembly",
                "WebAssembly is only for web games"
            ],
            answer: 1
        }
    ]
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
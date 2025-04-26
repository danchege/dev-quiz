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
        },
        {
            question: "What is the purpose of the HTML meta viewport tag?",
            options: [
                "To set the page background",
                "To make websites responsive on mobile devices",
                "To change the font size",
                "To add metadata only"
            ],
            answer: 1
        },
        {
            question: "Which CSS unit is relative to the font-size of the root element?",
            options: ["px", "em", "rem", "vh"],
            answer: 2
        },
        {
            question: "What is the correct HTML for creating a hyperlink?",
            options: [
                "<link>example.com</link>",
                "<a url='example.com'>link</a>",
                "<a href='example.com'>link</a>",
                "<hyperlink>example.com</hyperlink>"
            ],
            answer: 2
        },
        {
            question: "How do you declare a constant in JavaScript?",
            options: ["let", "var", "const", "constant"],
            answer: 2
        },
        {
            question: "What is the purpose of semantic HTML tags?",
            options: [
                "To make the code look better",
                "To improve accessibility and SEO",
                "To add styling",
                "To make text bold"
            ],
            answer: 1
        },
        {
            question: "Which HTML tag is used for navigation?",
            options: ["<navigation>", "<nav>", "<menu>", "<navbar>"],
            answer: 1
        },
        {
            question: "What attribute is used to provide text alternatives for images?",
            options: ["title", "description", "alt", "text"],
            answer: 2
        },
        {
            question: "What does the 'aria-label' attribute do?",
            options: [
                "Adds a visible label",
                "Provides a label for screen readers",
                "Changes text color",
                "Adds animation"
            ],
            answer: 1
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
        },
        {
            question: "What is the purpose of the fetch API?",
            options: [
                "To fetch local files only",
                "To make HTTP requests and handle responses",
                "To fetch images only",
                "To download files to user's computer"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of CSS media queries?",
            options: [
                "To play media files",
                "To create responsive designs for different screen sizes",
                "To query the database",
                "To style video elements"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript map() method?",
            options: [
                "To create a new map object",
                "To create a new array with results of calling a function for every array element",
                "To find elements in an array",
                "To sort array elements"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of CSS flexbox?",
            options: [
                "To create flexible responsive layout structure",
                "To add animations",
                "To style text elements",
                "To create grid layouts"
            ],
            answer: 0
        },
        {
            question: "What is JSON?",
            options: [
                "JavaScript Object Notation - a lightweight data format",
                "JavaScript Online Network",
                "JavaScript Object Network",
                "Java Standard Object Notation"
            ],
            answer: 0
        },
        {
            question: "What is npm?",
            options: [
                "New Project Manager",
                "Node Package Manager - for managing JavaScript packages",
                "New Programming Method",
                "Node Project Module"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the 'defer' attribute in script tags?",
            options: [
                "To prevent script loading",
                "To defer script execution until after HTML parsing",
                "To load script faster",
                "To delete script after execution"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of lazy loading images?",
            options: [
                "To make images load faster",
                "To reduce initial page load time by loading images only when needed",
                "To make images smaller",
                "To improve image quality"
            ],
            answer: 1
        },
        {
            question: "What is destructuring in JavaScript?",
            options: [
                "Breaking down code",
                "Extracting values from objects or arrays into distinct variables",
                "Removing unused code",
                "Converting objects to arrays"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of async/await in JavaScript?",
            options: [
                "To make code run faster",
                "To handle promises more elegantly and write asynchronous code that looks synchronous",
                "To prevent code execution",
                "To create loops"
            ],
            answer: 1
        },
        {
            question: "What is Cross-Origin Resource Sharing (CORS)?",
            options: [
                "A way to share files",
                "A security feature that controls how web pages access resources from different domains",
                "A type of encryption",
                "A way to compress images"
            ],
            answer: 1
        },
        {
            question: "What is Content Security Policy (CSP)?",
            options: [
                "A way to encrypt content",
                "A security feature that helps prevent XSS attacks",
                "A content management system",
                "A way to organize files"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of template literals in JavaScript?",
            options: [
                "To create templates",
                "To write multiline strings and embed expressions using ${expression}",
                "To style text",
                "To create HTML templates only"
            ],
            answer: 1
        },
        {
            question: "What is browser caching?",
            options: [
                "Saving passwords in browser",
                "Storing website resources locally to improve load times on subsequent visits",
                "Clearing browser history",
                "Blocking websites"
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
            question: "What is the difference between call, apply, and bind methods?",
            options: [
                "They are identical in functionality",
                "call accepts args list, apply accepts array, bind returns new function",
                "They only work with arrow functions",
                "They are used for DOM manipulation"
            ],
            answer: 1
        },
        {
            question: "What is event bubbling in JavaScript?",
            options: [
                "Creating multiple events",
                "Event propagation from child to parent elements",
                "Removing event listeners",
                "Adding event listeners"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the requestAnimationFrame method?",
            options: [
                "To create animations only",
                "To optimize animations by syncing with browser's refresh rate",
                "To pause animations",
                "To remove animations"
            ],
            answer: 1
        },
        {
            question: "What is memoization in JavaScript?",
            options: [
                "Storing memory leaks",
                "Caching function results for better performance",
                "Converting functions to methods",
                "Creating memory snapshots"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of Web Workers?",
            options: [
                "To manage website content",
                "To run scripts in background threads",
                "To optimize images",
                "To handle HTTP requests"
            ],
            answer: 1
        },
        {
            question: "What is the Service Worker API used for?",
            options: [
                "To create web services",
                "To enable offline functionality and intercept network requests",
                "To work with web sockets",
                "To manage server workers"
            ],
            answer: 1
        },
        {
            question: "What is tree shaking in JavaScript?",
            options: [
                "A DOM manipulation technique",
                "Dead code elimination in modern JavaScript bundlers",
                "A way to organize code",
                "A testing methodology"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the MutationObserver API?",
            options: [
                "To track mouse movements",
                "To watch for changes in the DOM tree",
                "To observe network requests",
                "To monitor JavaScript errors"
            ],
            answer: 1
        },
        {
            question: "What is the difference between shallow and deep copying in JavaScript?",
            options: [
                "They are the same thing",
                "Shallow copy duplicates references, deep copy duplicates values",
                "Deep copy is faster than shallow copy",
                "Shallow copy is for arrays only"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript Intl API?",
            options: [
                "To create international websites",
                "To handle language-sensitive string comparison, number formatting, and date/time formatting",
                "To translate text automatically",
                "To detect user's location"
            ],
            answer: 1
        },
        {
            question: "What is the difference between Promise.all() and Promise.race()?",
            options: [
                "They are the same",
                "all() waits for all promises, race() resolves with the first settled promise",
                "race() is faster than all()",
                "all() is for arrays only"
            ],
            answer: 1
        },
        {
            question: "What is code splitting in modern JavaScript?",
            options: [
                "Splitting code into multiple files",
                "Dynamically loading code chunks when needed to improve performance",
                "Breaking down functions",
                "Separating HTML and JavaScript"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript WeakSet?",
            options: [
                "To create weak passwords",
                "To store object references that don't prevent garbage collection",
                "To create small arrays",
                "To store weak types"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript Symbol type?",
            options: [
                "To create special characters",
                "To create unique and immutable identifiers",
                "To encrypt data",
                "To style text"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript Reflect API?",
            options: [
                "To create mirrors",
                "To provide methods for interceptable JavaScript operations",
                "To reflect light on websites",
                "To copy objects"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript BigInt type?",
            options: [
                "To store large images",
                "To represent integers with arbitrary precision",
                "To create big arrays",
                "To handle big data"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript AbortController?",
            options: [
                "To stop JavaScript execution",
                "To cancel fetch requests and abort DOM operations",
                "To prevent form submission",
                "To handle errors"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the JavaScript ResizeObserver?",
            options: [
                "To resize images",
                "To monitor changes to element's dimensions",
                "To handle window resizing",
                "To resize text"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of JavaScript decorators?",
            options: [
                "To style elements",
                "To modify classes and class members using wrapper functions",
                "To create UI components",
                "To add comments to code"
            ],
            answer: 1
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
        },
        {
            question: "What is the Virtual DOM and how does it work?",
            options: [
                "It's the same as the regular DOM",
                "A lightweight copy of the DOM that React uses to optimize rendering",
                "A virtual server",
                "A browser feature"
            ],
            answer: 1
        },
        {
            question: "What are JavaScript Generators and Iterators?",
            options: [
                "Tools for generating random numbers",
                "Functions that can pause execution and resume later, yielding multiple values",
                "Database query tools",
                "DOM manipulation tools"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the Proxy pattern in JavaScript?",
            options: [
                "To create network proxies",
                "To intercept and customize operations like property lookup and assignment",
                "To cache function results",
                "To manage server connections"
            ],
            answer: 1
        },
        {
            question: "What is the difference between AOT and JIT compilation?",
            options: [
                "They are the same thing",
                "AOT compiles during build time, JIT compiles during runtime",
                "AOT is faster than JIT",
                "JIT is only for JavaScript"
            ],
            answer: 1
        },
        {
            question: "What are Web Components?",
            options: [
                "Regular HTML elements",
                "Reusable, encapsulated HTML elements with custom functionality",
                "JavaScript functions",
                "CSS frameworks"
            ],
            answer: 1
        },
        {
            question: "What is the Shadow DOM?",
            options: [
                "A dark theme for websites",
                "A browser feature that provides encapsulation for DOM elements",
                "A virtual DOM implementation",
                "A JavaScript library"
            ],
            answer: 1
        },
        {
            question: "What is the purpose of the IntersectionObserver API?",
            options: [
                "To detect browser intersections",
                "To efficiently detect elements entering or leaving the viewport",
                "To observe DOM changes",
                "To track user interactions"
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
const backBtn = document.getElementById('backBtn');
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
backBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to go back? Your progress will be lost.')) {
        initQuiz();
    }
});

// Initialize the quiz when page loads
window.addEventListener('DOMContentLoaded', initQuiz);
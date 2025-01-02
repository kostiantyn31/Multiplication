/* This is where we put our global variables */
var errors = [];
var errorDist = [0];
var questions = parseInt(document.getElementById("questions").value);
var min = parseInt(document.getElementById("min").value);
var max = parseInt(document.getElementById("max").value);

function setup() {
    let body = document.getElementsByTagName("body")[0];
    let title = document.createElement("h1");
    title.innerHTML = "Multiplication Practice";
    body.appendChild(title);

    let console = document.createElement("div");
    console.id = "console";
    console.innerHTML = "instructions";
    body.appendChild(console);

    let button = document.createElement("button");
    button.innerHTML = "Start";
    button.addEventListener("click",configure);
    body.appendChild(button);
}

function configure() {
    questions = 5;
    min = 3;
    max = 12;
    console.innerHTML = "Program ready";

    let body = document.getElementsByTagName("body")[0];

    let oldbutton = document.getElementsByTagName("button")[0];
    oldbutton.remove();

    let newbutton = document.createElement("button");
    newbutton.innerHTML = "Play";
    newbutton.addEventListener("click",display);
    body.appendChild(newbutton);
}

function askQuestion() { 
    // let x = Math.floor(Math.random()*11);
    // let y = Math.floor(Math.random()*11);
    // let question = x*y;

    // let console = document.createElement("div");
    // console.id = "console";
    // console.innerHTML = "How much will " + x + " be multiplied by " + y + "???";
    // body.appendChild(console);

    let questionBox = document.getElementById("questionBox"); 
    let questDisplay = document.getElementById("questDisplay");
    questionBox.innerText = "Question "+ questionNum + " of " + questions;
    // x = Math.floor(Math.random() * (max - min + 1)) + min;
    // y = Math.floor(Math.random() * (max - min + 1)) + min;
    let questionText = x + " X " + y + " = ?";
    questDisplay.innerHTML= questionText;
}

function display() {
    // Find our Div
    let console = document.getElementById("console");
    // Remove the Button
    let oldbutton = document.getElementsByTagName("button")[0];
    oldbutton.remove();
    

    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.setAttribute("id","questionBox");
    console.appendChild(questionBox);

    // Display Question
    const questionDisplay = document.createElement("div");
    questionDisplay.setAttribute("id","questDisplay");
    console.appendChild(questionDisplay);

    // Answer Box
    const userAnswer = document.createElement("input");
    userAnswer.setAttribute('id','userAnswer');
    console.appendChild(userAnswer);

    // Displaying the button
    let subButton = document.createElement("button");
    subButton.setAttribute("id", "subButton");
    subButton.setAttribute("onClick", "checkAnswer()");
    subButton.innerText = "Submit Answer";
    console.appendChild(subButton);
    askQuestion();

    // Response
    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","response");
    console.appendChild(responseBox);
}
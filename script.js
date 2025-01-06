/* This is where we put our global variables */
var errors = [];
var errorDist = [0];
// var questions = parseInt(document.getElementById("questions").value);
// var min = parseInt(document.getElementById("min").value);
// var max = parseInt(document.getElementById("max").value);
var questions = 2;
var min = 3;
var max = 9;
var x = Math.floor(Math.random() * (max - min + 1)) + min;
var y = Math.floor(Math.random() * (max - min + 1)) + min;
var ans = x*y;


function setup() {
    let body = document.getElementsByTagName("body")[0];
    let title = document.createElement("h1");
    title.innerHTML = "Multiplication Practice";
    body.appendChild(title);

    let console = document.createElement("div");
    console.id = "console";
    console.innerHTML = "instructions" + "<br>";
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

function askQuestion(questionNum, questions) { 
    let questionText =  "Question "+ questionNum + " of " + questions + "<br>";
    // let x = Math.floor(Math.random() * (max - min + 1)) + min;
    // let y = Math.floor(Math.random() * (max - min + 1)) + min;
    questionText += x + " * " + y + " = ?";

    return questionText;
}

function display() {
    // Find our Div
    let console = document.getElementById("console");
    // Remove the Button
    let oldbutton = document.getElementsByTagName("button")[0];
    oldbutton.remove();
    
    // Displaying the button
    let newButton = document.createElement("button");
    newButton.id = "newButton";
    newButton.addEventListener("click", checkAnswer);
    newButton.innerText = "Submit Answer";
    console.appendChild(newButton);

    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.setAttribute("id","questionBox");
    questionBox.innerHTML = askQuestion(1,1);
    console.appendChild(questionBox);
    
    // Answer Box
    const answer = document.createElement("input");
    answer.id = "answer";
    console.appendChild(answer);   

    // Response
    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","response");
    responseBox.innerHTML = checkAnswer(1,1);
    console.appendChild(responseBox);
}

function checkAnswer() {
    answer = document.getElementById("answer").value;
    responseBox = document.getElementById("responseBox");

    if (answer == ans) {

    }
    else {

    }

}
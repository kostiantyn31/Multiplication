/* Function to run whichever loop we picked */
var questions = parseInt(localStorage.getItem("questions"));
var max = parseInt(localStorage.getItem("max"));
var min = parseInt(localStorage.getItem("min"));
var errors = [];
var questionNum = 1;
var x = Math.floor(Math.random() * (max - min + 1)) + min;
var y = Math.floor(Math.random() * (max - min + 1)) + min;

function startLoop() {
    // alert(questions+"-"+max+"-"+min);
    // forLoop();
    uiLoop();
}

function uiLoop() {
    let question = 1;
    // Find our Div
    let interface = document.getElementById("interface");
    // Remove the Button
    var oldButton = document.getElementById("beginQuiz");
    oldButton.remove();
    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.innerText = "Question " + question + " of " + questions;
    interface.appendChild(questionBox);
    // Ask the Question
    const equation = document.createElement("div");
    equation.innerText = x + " X " + y + " = ?";
    interface.appendChild(equation);
    // Answer Box
    const userAnswer = document.createElement("input");
    userAnswer.setAttribute('id','userAnswer');
    //userAnswer.innerText = "Submit Answer";
    interface.appendChild(userAnswer);
    // Displaying the button
    const buttonBox = document.createElement("div");
    buttonBox.setAttribute('id', 'buttonBox')
    let button = document.createElement("button");
    button.innerText = "Submit Answer";
    button.setAttribute("onclick", "getAnswer()");
    buttonBox.appendChild(button);
    interface.appendChild(buttonBox);
}

function getAnswer() {
    const userAnswer = document.getElementById("userAnswer");
    if (userAnswer.value != x * y) {
        alert("Incorrect, " + x + " X " + y + " = " + (x * y));
        errors.push((x, y));
    }
    else {
        alert("correct");
    }
    question++;
    if (question <= questions) {
        uiLoop();
    }
    else {
        interface.innerHTML = "";
    }
}

function forLoop() {
    for (let question = 1; question <= questions; question++) {
        let error = askQuestion();
        if (error[0] > 0) {
            error.splice(0, 1);
            errors.push(error);
            alert(errors.join("\n"));
        }
    }
}

function askQuestion() {
    let error = [0, 0, 0];
    let product = x * y;
    // let answer = prompt(x + " X " + y +" = ?");
    let answer = x + " X " + y + " = ?";
    if (answer == product) alert("Correct!");
    else {
        alert("Incorrect! " + x + " X " + y + " = " + product);
        error = [1, x, y];
    }
    return error;
}


/* Function to run whichever loop we picked */
var questions = parseInt(localStorage.getItem("questions"));
var max = parseInt(localStorage.getItem("max"));
var min = parseInt(localStorage.getItem("min"));
var errors = [];
var questionNum = 1;
var x = 0;
var y = 0;
var product = 0;

function display() {
    // Find our Div
    let interface = document.getElementById("interface");
    // Remove the Button
    let oldButton = document.getElementById("beginQuiz");
    oldButton.remove();

    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.setAttribute("id","questionBox");
    interface.appendChild(questionBox);

    // Display Question
    const questionDisplay = document.createElement("div");
    questionDisplay.setAttribute("id","questDisplay");
    interface.appendChild(questionDisplay);

    // Answer Box
    const userAnswer = document.createElement("input");
    userAnswer.setAttribute('id','userAnswer');
    interface.appendChild(userAnswer);

    // Displaying the button
    let subButton = document.createElement("button");
    subButton.setAttribute("id", "subButton");
    subButton.setAttribute("onclick", "checkAnswer()");
    subButton.innerText = "Submit Answer";
    interface.appendChild(subButton);
    display();

    // Response
    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","response");
    interface.appendChild(responseBox);
}

function askQuestion(){
    let questionBox = document.getElementById("questionBox"); 
    let questDisplay = document.getElementById("questDisplay");
    questionBox.innerText = "Question "+questionNum+" of "+questions;
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    let questionText = x + " X " + y +" = ?";
    questDisplay.innerHTML= questionText;
}

function checkAnswer(){
    let userAnswer = document.getElementById("userAnswer");
    let answer = parseInt(userAnswer.value);
    let questionBox = document.getElementById("questionBox");
    let correct = null;
    let wrong = null;
    let responseBox = document.getElementById("responseBox");
    let response = "";
    let error = null;
    product = (x * y);
    if(answer == product){
        questionNum++;
        correct = "Correct, "+x+" X "+y+" equals "+product;
        response = correct;
        responseBox.innerHTML = response;
    }
    else{
        error = [x,y];
        error.splice(0,1);
        errors.push(error);
        alert(errors);
        questionNum++;
        wrong = "Incorrect!, "+x+" X "+y+" equals "+product;
        response = wrong;
        responseBox.innerHTML = response;
        }

    if (questionNum <= questions){
        askQuestion();
    }
    else{
        document.location = 'stats.html';
    }
}
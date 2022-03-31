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
    subButton.setAttribute("onClick", "checkAnswer()");
    subButton.innerText = "Submit Answer";
    interface.appendChild(subButton);
    askQuestion();

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
    alert("hi");
    let userAnswer = document.getElementById("userAnswer");
    let answer = parseInt(userAnswer.value);
    let questionBox = document.getElementById("questionBox");
    let correct = null;
    let wrong = null;
    let responseBox = document.getElementById("response");
    let response = "working";
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
        interface.setAttribute("class",null);
        interface.innerHTML = " ";
        localStorage.setItem('errors',errors);
        stats();
    }
}

function stats() {
    let highFactor = [0, 0];
    // sample errors array data
    let errorDist = []
    // fill errorDist with zeros
    for (let i = 0; i <= max; i++) {
        errorDist[i] = 0;
    }
    // add error factors to dist
    for (i = 0; i < errors.length; i++) {
        errorDist[errors[i][0]]++;
        errorDist[errors[i][1]]++;
    }
    // find greatest number
    for (let i = max; i > 0; i--) {
        if (errorDist[i] > highFactor[1]) {
            highFactor = [i, errorDist[i]];
        }
    }
  //The string that displays the string of the tables (7*[1...max] = product);
    let errorString = ""; //Errors String to display the times table
    for (let i = 0; i < errors.length; i++) {
        errorString += errors[i][0] + " * " + errors[i][1] + " = " + (errors[i][0] * errors[i][1]) + " (" + errors[i][2] + ")\n";
    }

    //The wrong question string
    let wrongQuestion = document.createElement("p");
    wrongQuestion.innerText = "You got "+errors.length+" of "+max+" wrong.";
    document.body.appendChild(wrongQuestion);
    if (highFactor[0] > 0) {
        localStorage.setItem("problemFactor", highFactor[0]);
    //The biggest problem string
        let biggestIssue = document.createElement("p");
        biggestIssue.setAttribute("margin-top", "25px");
        biggestIssue.innerText = "Your biggest problem factor was " + highFactor[0] + ".";
        interface.appendChild(biggestIssue);
    } 
    else{
      localStorage.setItem("problemFactor", null);
    } 

  //The retry button asking the user to retry the quiz.
    let retry = document.createElement("button");
    retry.innerText = "Try again";
    retry.id = "tryAgain";
    retry.setAttribute("onclick", "retry()");
    interface.appendChild(retry);

  //The tables button directing the player to go to the times tables
    let tables = document.createElement("button");
    tables.setAttribute("id","tablesButton");
    tables.innerText = "View multiplication tables";
    tables.setAttribute("onclick", "toTables()");
    interface.appendChild(tables);
}
  //Going to Tables.HTML

function toTables() {
    document.location = "tables.html";
}

function retry(){
    document.location = 'setup.html';
}
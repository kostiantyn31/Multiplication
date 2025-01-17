/* This is where we put our global variables */
var errors = [];
var errorDist = [0];
var questions = 1;
var min = 3;
var max = 10;
var x = Math.floor(Math.random() * (max - min + 1)) + min;
var y = Math.floor(Math.random() * (max - min + 1)) + min;
var ans = x*y;
var questionNum = 1;
var errors = [];
var factors= [0,0];
var totalQuestions = 1;

function setup() {
    let body = document.getElementsByTagName("body")[0];
    let title = document.createElement("h1");
    title.innerHTML = "Multiplication Practice";
    body.appendChild(title);

    let playBoard = document.createElement("div");
    playBoard.id = "console";
    body.appendChild(playBoard);

    let button = document.createElement("button");
    button.innerHTML = "Start";
    button.addEventListener("click",configure);
    body.appendChild(button);
}

function configure() {
    let playBoard = document.getElementById("console");
    playBoard.innerHTML = "";
    let body = document.getElementsByTagName("body")[0];

    let oldbutton = document.getElementsByTagName("button")[0];
    oldbutton.remove();

    let newbutton = document.createElement("button");
    newbutton.innerHTML = "Play";
    newbutton.addEventListener("click",display);
    body.appendChild(newbutton);
}

function display() {
    let playBoard = document.getElementById("console");
    playBoard.innerHTML = "";
    // Remove the Button
    let oldbutton = document.getElementsByTagName("button")[0];
    if(oldbutton) {oldbutton.remove();}


    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.setAttribute("id","questionBox");
    playBoard.appendChild(questionBox);
    
    newQuestion();
}

function newQuestion(){
    if (questionNum > totalQuestions) {
        showResults();
    }
    else {
        const answer = document.createElement("input");
        answer.id = "answer";
        document.getElementById("console").appendChild(answer);   
        document.getElementById("questionBox").innerHTML=askQuestion();

        // Display the button
        let newButton = document.createElement("button");
        newButton.id = "newButton";
        newButton.addEventListener("click", checkAnswer);
        newButton.innerText = "Submit Answer";
        document.getElementById("console").appendChild(newButton);
    }  
}

function checkAnswer() {

    let playBoard = document.getElementById("console");
    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","responseBox");
    playBoard.appendChild(responseBox);

    let response = document.getElementById("answer").value;
    let product = x * y;
    let feedback = "";

    if (response == product) {
        feedback = "Correct";
        responseBox.innerHTML = feedback;

        questionNum++;

        let nextRound = document.createElement("button");
        nextRound.id = "nextRound";
        nextRound.addEventListener("click", function(event) {
            deleteAll();
            display();
            responseBox.innerHTML = "";
        });
        nextRound.innerText = "Next round";
        playBoard.appendChild(nextRound);
    }
    else {
        errorFeedback(response);
    }
}

function errorFeedback(response){
    let responseBox = document.getElementById("responseBox");
    let feedback = response + " is wrong. Change your answer";
    let answer = document.getElementById("answer");
    answer.value = "";
    responseBox.innerHTML = feedback;

    if (document.getElementById("nextRound")) {
        nextRound.remove();
    }
}

function askQuestion(){
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    y = Math.floor(Math.random() * (max - min + 1)) + min;
    let questionText =  "Question "+ questionNum + " of " + questions + "<br>";
    questionText += x + " * " + y + " = ?";

    return questionText;
}

function showResults() {
    let responseBox = document.getElementById("responseBox");
    let feedback = "u have 5 correct";
    responseBox.innerHTML = feedback;
}

function deleteAll() {
    document.getElementById("nextRound").remove();
    document.getElementById("answer").remove();
    document.getElementById("newButton").remove();
    document.getElementById("questionBox").remove();
}
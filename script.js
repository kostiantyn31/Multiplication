/* This is where we put our global variables */
var errors = [];
var errorDist = [0];
var questions = 3;
var min = 3;
var max = 10;
var x = Math.floor(Math.random() * (max - min + 1)) + min;
var y = Math.floor(Math.random() * (max - min + 1)) + min;
var ans = x*y;
var questionNum = 1;
var errors = [];
var factors= [0,0];

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

function checkAnswer() {
    console.log("Checking answer");
    let playBoard = document.getElementById("console");
    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","response");
    playBoard.appendChild(responseBox);

    let answer = document.getElementById("answer").value;
    let product = x * y;
    let feedback = "";


    if (answer == product) {
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
        errorFeedback(answer);
    }
}

function errorFeedback(answer){
    let responseBox = document.getElementById("response");
    let feedback = answer + " is wrong. Change your answer";
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

function deleteAll() {
    nextRound.remove();
    document.getElementById("answer").remove();
    document.getElementById("newButton").remove();
    document.getElementById("questionBox").remove();
    document.getElementById("response").remove();
}

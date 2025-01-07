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
var questionNum = 1;


function setup() {
    let body = document.getElementsByTagName("body")[0];
    let title = document.createElement("h1");
    title.innerHTML = "Multiplication Practice";
    body.appendChild(title);

    let console = document.createElement("div");
    console.id = "console";
    body.appendChild(console);

    let button = document.createElement("button");
    button.innerHTML = "Start";
    button.addEventListener("click",configure);
    body.appendChild(button);
}

function configure() {
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

// function askQuestion(questionNum, questions) { 
//     getRounds();
//     let questionText =  "Question "+ questionNum + " of " + questions + "<br>";
//     // let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     // let y = Math.floor(Math.random() * (max - min + 1)) + min;
//     questionText += x + " * " + y + " = ?";


//     return questionText;
// }

function display() {
    // Find our Div
    let console = document.getElementById("console");
    // Remove the Button
    let oldbutton = document.getElementsByTagName("button")[0];
    if(oldbutton) {oldbutton.remove();}

    // Create the Question Box
    const questionBox = document.createElement("div");
    questionBox.setAttribute("id","questionBox");
    questionBox.innerHTML = askQuestion(1,1);
    console.appendChild(questionBox);
    
    // Answer Box
    const answer = document.createElement("input");
    answer.id = "answer";
    console.appendChild(answer);   

    // Displaying the button
    let newButton = document.createElement("button");
    newButton.id = "newButton";
    newButton.addEventListener("click", checkAnswer);
    newButton.innerText = "Submit Answer";
    console.appendChild(newButton);

    let nextRound = document.createElement("button");
    nextRound.id = "nextRound";
    nextRound.addEventListener("click", askQuestion);
    nextRound.innerText = "nextRound";
    console.appendChild(nextRound);

    return checkAnswer();

}

function checkAnswer() {
    let console = document.getElementById("console");

    let responseBox = document.createElement("div");
    responseBox.setAttribute("id","response");
    console.appendChild(responseBox);
    answer = document.getElementById("answer").value;
    let feedback = "";
    if (answer == ans) {
        feedback = "correct";
    }
    else {
        feedback = "wrong";
    }
    responseBox.innerHTML = feedback;
    questionNum++;
    askQuestion(questionNum);
}

function getRounds(){
    let rounds = document.getElementById("rounds").value;
    askQuestion(rounds);
}


function askQuestion(questionNum){
    if (questionNum > 1) {
        document.getElementById("console").innerHTML="";
        display();
    }
    if (document.getElementById("response")) {
        response.remove();
        console.log("removed")
    }
    let questionText =  "Question "+ questionNum + " of " + questions + "<br>";
    questionText += x + " * " + y + " = ?";
    let score = [0, 0];
    score++;
    return questionText;
}
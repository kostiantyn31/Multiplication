/* Function to run whichever loop we picked */
function main(){
    forLoop();
    stats();
}

function forLoop() {
    for (let question = 1; question <= questions; question++) {
        let error = askQuestion();
        if (error[0] > 0) {
            error.splice(0,1);
            errors.push(error);
            alert(errors.join("\n"));
        }
    }
}

function askQuestion(){
    let error = [0,0,0];
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let product = x * y;
    let answer = prompt(x + " X " + y +" = ?");
    if (answer == product) alert("Correct!");
    else {
        alert("Incorrect! " + x + " X " + y + " = " + product);
        error = [1, x, y];
    }
    return error;
}
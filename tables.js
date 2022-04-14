/* This is where we print out the times tables */

<<<<<<< Updated upstream
var inter = document.createElement("inter");
inner.setAttribute("id","inter");
document.body.appendChild(inter);

function tables(factor){
    if(factor === "undefined"){
        factor = prompt("Times tables for ");
    }
    let table = "Table for "+factor+ "\n";
    for(let row = min; row <= max; row++){
        table += factor+ " * " +row+ " = "+ factor*row + "\n";
=======
function tables(){
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    let factor = localStorage.getItem("problemFactor");
    // if (factor === "undefined") {
    //     alert("hey");
    //     factor = prompt("Times tables for ");
    // }
    let tableText = "Table for "+factor+ "\n";
    for (let row = min; row <= max; row++) {
        tableText += factor+ " * " +row+ " = "+ factor*row + "\n";
        alert(tableText);
>>>>>>> Stashed changes
    }
    alert(table);
}
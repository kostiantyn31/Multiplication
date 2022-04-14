/* This is where we print out the times tables */

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
    }
    alert(tableText);
}
/* This is where we print out the times tables */

var buttonTab = document.createElement("button");
buttonTab.setAttribute("button","buttonTab");
buttonTab.setAttribute("onClick","tables()");
buttonTab.innertText="Tables";
document.body.appendChild(buttonTab);

function tables(){
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    let factor = localStorage.getItem("problemFactor");
    if (factor === "undefined") {
        alert("hey");
        factor = prompt("Times tables for ");
    }
    let tableText = "Table for "+factor+ "\n";
    for (let row = min; row <= max; row++) {
        tableText += factor+ " * " +row+ " = "+ factor*row + "\n";
    }
    alert(tableText);
}
/* This is where we print out the times tables */

function tables(){
    let min = localStorage.getItem("min");
    let max = localStorage.getItem("max");
    let factor = localStorage.getItem("problemFactor");
    if (isNaN(factor)) {
        factor = prompt("Times tables for ");
    }
    let tableText = "<tr><th>Table For Missed Candy, Factor <span>"+factor+"</span>!</th></tr>";
    for (let row = min; row <= max; row++) {
        tableText += "<tr><td>"+factor+ " * " +row+ " = "+ factor*row + "</td></tr>";
    }
   let timesTable = document.getElementById("candyTable");
   timesTable.innerHTML = tableText;
}

// var tbl = document.getElementById("candyTable");
// var row = tbl.insertRow();
// var cell1 = row.insertCell();
// cell1.innerHTML = "hey";
/* This is where we print out the times tables */
function tables(factor){
    if(factor == undefined) {
        factor = prompt("Times tables for ");
    }
    let table = "Table for "+factor+ "\n";
    for(var row = min; row <= max; row++){
        table += factor+ " * " +row+ " = "+ factor*row + "\n";
    }
    alert(table);
}

localStorage.getItem("min");
localStorage.getItem("max");
localStorage.getItem("questions");
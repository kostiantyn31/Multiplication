// Stats Function: Counts the errors and says "You got [errors] out of 10 wrong."
function stats() {
    // sample errors array data
    // fill errorDist with zeros
    for (let i = 0; i <= max; i++){
        errorDist[i]=0;
    }
    // add error factors to dist
    for (i = 0; i < errors.length; i++){
        errorDist[errors[i][0]]++;
        errorDist[errors[i][1]]++;
    }
    // find greatest number
    let bigE = [min,0];
    for (let i = max; i > 0; i--){
        if (errorDist[i] > bigE[1]) {
            bigE = [i,errorDist[i]];
        }
    }
    alert("You got "+ errors.length + " out of " + questions + " questions wrong.");
    alert("Your biggest problem factor was "+ bigE[0]);
    tables(bigE[0]);
}
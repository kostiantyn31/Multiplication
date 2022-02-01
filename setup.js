// Setup is where we change the values of globals

function setup(){
    questions = prompt("Let's Multiply!\nHow many questions?");
    min = parseInt(prompt("Minimum factor (like 3)?"));
    max = parseInt(prompt("Maximum factor (like 9)?"));
    main();
}

/* Set Difficulty */
function setDifficulty(){
   return; 
}

function getStats(){
  questions = document.getElementById("questions").value;
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);
  main();
}
document.getElementById("min").setup.html = localStorage.getItem("min");
document.getElementById("max").setup.html = localStorage.getItem("max");
document.getElementById("questions").setup.html = localStorage.getItem("questions");
localStorage.setItem("min", "min");
localStorage.setItem("max", "max");
localStorage.setItem("questions", "questions");
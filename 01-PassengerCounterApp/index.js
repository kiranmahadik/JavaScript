//document.getElementById("count-el").innerText = 5;


let incrementValue = 0;

let saveE1 = document.getElementById("save-el");
let incrementCountValue = document.getElementById("count-el");

// Function to increment the count when butten is clicked.
function incrementCount() {
    incrementValue = incrementValue + 1;
    incrementCountValue.textContent = incrementValue;

}
incrementCount();

function save() {
    let countStr = " " + incrementValue + " -";
    saveE1.textContent += countStr;
    incrementCountValue.textContent = 0;
    incrementValue = 0;

}

// Ask the user for a number
let number = parseInt(prompt("Enter a number:"));

// Get the output div
let outputDiv = document.getElementById("output");

// Validate the input
if (!isNaN(number)) {
  let result = `<strong>Multiplication Table of ${number}:</strong><br>`;
  for (let i = 1; i <= 10; i++) {
    result += `${number} × ${i} = ${number * i}<br>`;
  }
  outputDiv.innerHTML = result;
} else {
  outputDiv.innerHTML = "Please enter a valid number!";
}

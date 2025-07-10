function checkSum() {
  let num1 = parseInt(prompt("Enter the first number:"));
  let num2 = parseInt(prompt("Enter the second number:"));

  let sum = num1 + num2;

  if (sum % 2 === 0) {
    alert("Even Sum");
    console.log("Even Sum");
  } else {
    alert("Odd Sum");
    console.log("Odd Sum");
  }
}

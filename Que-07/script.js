function checkNumber() {
  const num = parseFloat(document.getElementById("numberInput").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num)) {
    resultElement.textContent = "Please enter a valid number.";
    resultElement.style.color = "red";
  } else if (num > 0) {
    resultElement.textContent = "The number is Positive.";
    resultElement.style.color = "green";
  } else if (num < 0) {
    resultElement.textContent = "The number is Negative.";
    resultElement.style.color = "orange";
  } else {
    resultElement.textContent = "The number is Zero.";
    resultElement.style.color = "blue";
  }
}

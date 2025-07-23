function calculateSum() {
  const number = document.getElementById("numberInput").value;
  let sum = 0;

  // Convert number to string and loop through digits
  for (let digit of number) {
    sum += parseInt(digit);
  }

  document.getElementById("result").innerText = `Sum of digits: ${sum}`;
}

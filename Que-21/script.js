function countEvenDigits() {
  const input = document.getElementById("numberInput").value;
  let evenCount = 0;

  for (let i = 0; i < input.length; i++) {
    let digit = parseInt(input[i]);
    if (!isNaN(digit) && digit % 2 === 0) {
      evenCount++;
    }
  }

  document.getElementById("result").textContent = "Even digits count: " + evenCount;
}

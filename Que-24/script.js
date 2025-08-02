function findMissing() {
  const input = document.getElementById('numbers').value;
  const arr = input.split(',').map(num => parseInt(num.trim(), 10));

  if (arr.some(isNaN)) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const n = arr.length + 1; // One number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => a + b, 0);
  const missing = expectedSum - actualSum;

  document.getElementById('result').innerText = `Missing number is: ${missing}`;
}

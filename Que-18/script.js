function reverseNumber() {
  let num = document.getElementById("numberInput").value;
  let reversed = 0;
  let originalNum = parseInt(num);

  while (originalNum > 0) {
    let digit = originalNum % 10;
    reversed = reversed * 10 + digit;
    originalNum = Math.floor(originalNum / 10);
  }

  document.getElementById("result").innerText = "Reversed Number: " + reversed;
}

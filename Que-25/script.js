function convertToWord() {
  const number = parseInt(document.getElementById('num').value);

  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

  if (number >= 0 && number <= 9) {
    document.getElementById('result').innerText = `In words: ${words[number]}`;
  } else {
    document.getElementById('result').innerText = "Please enter a number between 0 and 9.";
  }
}

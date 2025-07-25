function checkPalindrome() {
  const word = document.getElementById("wordInput").value.trim().toLowerCase();
  const reversed = word.split('').reverse().join('');

  if (word === "") {
    document.getElementById("result").textContent = "Please enter a word.";
  } else if (word === reversed) {
    document.getElementById("result").textContent = "Palindrome";
  } else {
    document.getElementById("result").textContent = "Not a Palindrome";
  }
}

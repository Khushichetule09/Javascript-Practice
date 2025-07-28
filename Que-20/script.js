function findFirstNonRepeating() {
  const word = document.getElementById("wordInput").value.toLowerCase();
  const resultElement = document.getElementById("result");

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (word.indexOf(char) === word.lastIndexOf(char)) {
      resultElement.innerText = `First non-repeating character is: ${char}`;
      return;
    }
  }

  resultElement.innerText = "No non-repeating character found.";
}

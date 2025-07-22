function reverseNumber() {
  let num = document.getElementById("numberInput").value;
  
  // Check if the input is a 3-digit number
  if (!/^\d{3}$/.test(num)) {
    document.getElementById("result").innerText = "Please enter a valid 3-digit number.";
    return;
  }

  // Reverse the number
  let reversed = num.split("").reverse().join("");
  document.getElementById("result").innerText = "Reversed Number: " + reversed;
}

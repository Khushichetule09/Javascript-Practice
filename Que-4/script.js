function findLargest() {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  const c = parseFloat(document.getElementById("num3").value);
  let largest;

  if (a >= b && a >= c) {
    largest = a;
  } else if (b >= a && b >= c) {
    largest = b;
  } else {
    largest = c;
  }

  document.getElementById("result").innerText = "The largest number is: " + largest;
}

function findSecondLargest() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let second;

  if ((a > b && a < c) || (a > c && a < b)) {
    second = a;
  } else if ((b > a && b < c) || (b > c && b < a)) {
    second = b;
  } else {
    second = c;
  }

  document.getElementById("result").textContent =
    "Second largest number is: " + second;
}

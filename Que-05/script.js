function checkLeapYear() {
  const year = parseInt(document.getElementById('yearInput').value);
  const result = document.getElementById('result');

  if (isNaN(year)) {
    result.textContent = "Please enter a valid year.";
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    result.textContent = year + " is a Leap Year!";
  } else {
    result.textContent = year + " is NOT a Leap Year.";
  }
}

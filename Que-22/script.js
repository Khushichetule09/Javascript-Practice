document.getElementById('infoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value, 10);
  const salary = parseFloat(document.getElementById('salary').value);

  let message = '';

  if (age < 18) {
    message = 'Not eligible';
  } else {
    if (salary < 20000) {
      message = 'Low Salary';
    } else if (salary >= 50000) {
      message = 'High Salary';
    } else {
      message = 'Medium Salary';
    }
  }

  document.getElementById('output').textContent = message;
});

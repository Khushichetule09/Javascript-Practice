// Predefined username and password
const correctUsername = "admin";
const correctPassword = "12345";

// Ask user for credentials
const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

// Validate
if (username === correctUsername && password === correctPassword) {
  alert("Login Successful");
} else {
  alert("Incorrect username or password.");
}

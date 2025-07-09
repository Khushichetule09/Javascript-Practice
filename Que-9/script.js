function checkTrafficLight() {
  const color = document.getElementById("colorInput").value.toLowerCase();
  const message = document.getElementById("message");

  if (color === "red") {
    message.textContent = "Stop!";
    message.style.color = "red";
  } else if (color === "yellow") {
    message.textContent = "Get Ready!";
    message.style.color = "orange";
  } else if (color === "green") {
    message.textContent = "Go!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid color!";
    message.style.color = "black";
  }
}

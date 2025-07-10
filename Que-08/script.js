function greetUser() {
  const name = document.getElementById("name").value;
  const hour = parseInt(document.getElementById("time").value);
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning, " + name + "!";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon, " + name + "!";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening, " + name + "!";
  } else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour < 5)) {
    greeting = "Good Night, " + name + "!";
  } else {
    greeting = "Invalid time entered.";
  }

  document.getElementById("greeting").innerText = greeting;
}

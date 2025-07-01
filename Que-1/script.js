let age = prompt("Enter your age:");
age = Number(age);

if (age < 18) {
    alert("You are a minor.");
} else if (age <= 60) {
    alert("You are an adult.");
} else {
    alert("You are a senior citizen.");
}

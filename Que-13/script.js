function swapNumbers() {
    let a = parseInt(prompt("Enter first number (a):"));
    let b = parseInt(prompt("Enter second number (b):"));

    let output = document.getElementById("output");
    output.innerHTML = `Before Swapping: a = ${a}, b = ${b}<br>`;

    // Swap without third variable using arithmetic
    a = a + b;
    b = a - b;
    a = a - b;

    output.innerHTML += `After Swapping: a = ${a}, b = ${b}`;
}

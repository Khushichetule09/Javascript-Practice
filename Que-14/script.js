function runFizzBuzz() {
    let num = parseInt(prompt("Enter a number:"));

    if (num % 3 === 0 && num % 5 === 0) {
        alert("FizzBuzz");
    } else if (num % 3 === 0) {
        alert("Fizz");
    } else if (num % 5 === 0) {
        alert("Buzz");
    } else {
        alert(num);
    }
}

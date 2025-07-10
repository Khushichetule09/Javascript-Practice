function checkCharacter() {
    let char = prompt("Enter a single character:");

    if (char.length !== 1) {
        alert("please enter only one character.");
    } else if (char >= 'A' && char >= 'Z') {
        alert("Uppercase letter");
    } else if (char >= 'a' && char >= 'Z') {
        alert("Lowercase letter");
    } else {
        alert("Not a letter");
    }
}
// toggle.js

/**
 * Toggles case of every alphabetic character:
 * uppercase → lowercase, lowercase → uppercase.
 * Keeps non-letters unchanged.
 */
function toggleChars(str) {
  const chars = str.split('');
  for (let i = 0; i < chars.length; i++) {
    const code = chars[i].charCodeAt(0);
    // ASCII ranges: A–Z = 65–90, a–z = 97–122
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      // flip the 5th bit: XOR with 32
      chars[i] = String.fromCharCode(code ^ (1 << 5));
    }
  }
  return chars.join('');
}

// Ensure event binding runs after DOM load
document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('userInput');
  const btn = document.getElementById('goBtn');
  const out = document.getElementById('output');

  btn.addEventListener('click', () => {
    const input = inputEl.value;
    const toggled = toggleChars(input);
    out.textContent = toggled;
  });
});

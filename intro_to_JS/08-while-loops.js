// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }
const password = "tomorrow";
let userGuess = "";

// while (userGuess !== password) {
//     userGuess = prompt("Please enter your password");
// }
//
// alert("Login successful!")

// 5 * 4 * 3 * 2 * 1
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--;
} while (number > 0);

console.log(original + " factorial is " + factorial);

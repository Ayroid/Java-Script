let prompt = require("prompt-sync")();

let num = 39
let i
while (i != num ){
    i = prompt("Enter Number: ")
    console.log("Try Again!");
}
console.log("You entered the correct number!");

const prompt = require("prompt-sync")();

let number = Number.parseInt(prompt("Enter Number:"))
if(number%2==0 || number%3==0){
    console.log("Divisible")
}
else{
    console.log("Not Divisible")
}
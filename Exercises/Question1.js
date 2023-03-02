const prompt =require("prompt-sync")();

let a = Math.floor((Math.random() * 100)+1);
var gc = 0;
var exit = 0;

while (gc!=100){
    let guess = prompt("Guess a Number: ")
    gc++;

    if(guess < a){
        console.log("Lower")
    }
    else if (guess > a){
        console.log("Upper")
    }
    else{
        console.log(`You Won!\nScore: ${100-gc}`)
        exit=1;
        break;
    }
}
if (exit == 0){
    console.log("You Lost!")
}
const prompt =require("prompt-sync")();

let a = [1, 2, 3, 4, 5]

while(true){
    let ch = ''
    a.push(Number.parseInt(prompt("Enter a number: ")))
    ch = prompt("Press Y to Continue: ")
    if (!(ch.toUpperCase()=='Y'))
        break;
}

console.log(a)
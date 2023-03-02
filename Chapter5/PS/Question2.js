const prompt =require("prompt-sync")();

let a = [1, 2, 3, 4, 5]

while(true){
    let num = Number.parseInt(prompt("Enter a number: "))
    if (num==0)
        break;
    a.push(num)
}

console.log(a)
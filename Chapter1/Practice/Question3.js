// Create a const object in javascript and try to change it to hold a number later

const a = {
    name : "ABC",
    age : 10
}
console.log(a)
a = 10 // const cannot be reassigned
console.log(a)
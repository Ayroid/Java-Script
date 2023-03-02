// let marks = [92, 62, 81, 91, 61, 84, "Absent", false];

// console.log(marks);
// console.log(marks.length);

// console.log(marks[8]);
// marks[8] = 79;
// console.log(marks[8]);
// console.log(marks);

// marks[6] = 99;
// console.log(marks);

// console.log(typeof marks);

// console.log(marks);
// delete marks[0]; //Doesn't affect array's length
// console.log(marks);
// console.log(typeof marks[0]);

//toString
let n = [1, 17, 92, 23, 2];
console.log(n.toString()); // Converts array to string
console.log(n.join("~")); // Joins all the elements using a seperator
console.log(n.pop()); // Updates the original array returning the popped value
n.push(6, 8);
console.log(n);
console.log(n.shift()); //Removes the first element position
console.log(n.unshift(2)); //Inserts the elements at first position
delete n[0]; // makes the position undefined without affecting the length
console.log(n);
n[0] = 1;
let m = [96, 77, 56, 93];
console.log(m.concat(n));

console.log(n.sort()); // Sorts the array alphabetically not in inc/dec order

let compare = (a, b) => {
  return a - b;
};
console.log(n.sort(compare));

// [ 1, 6, 8, 17, 23, 92 ]
n.splice(3, 0, 91, 63, 82); // Position, n terms to remove, elements to be added

console.log(n);

// [ 1,  6,  8, 91, 63, 82, 17, 23, 92 ]
console.log(n.slice(1,4));

// For loop
for( let i=0; i<n.length;i++){
  console.log(n[i])
}

//For Each Loop
n.forEach((i) => { // Calls a function, once for each array element
  console.log(i)
})

let a = n.map((value)=>{ // Creates a new array by performing some operations on the previous array values
  return value*2
})
console.log(a)

console.log("-------")

let b = n.filter((value)=>{ // Filters and creates a new array based on some condition
  return value<20
})
console.log(b)

console.log("-------")

for (let i of n){ // Values of array
  console.log(i)
}

for (let i in n){ // Keys of array
  console.log(n[i])
}

let c = n.reduce((n1, n2) => {
  return n1+n2
})
console.log(c)
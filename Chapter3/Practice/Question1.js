let marks = {
    Harry : 98,
    Rohan : 70,
    Aakash : 7
};

//for loop
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}
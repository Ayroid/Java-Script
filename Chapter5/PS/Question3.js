let a = [10, 20, 25, 40, 45, 55, 60]

let b = a.filter((num)=>{
    return (num%10==0)?num:''
})

console.log(b)
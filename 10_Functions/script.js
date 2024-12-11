// // In this session we are gonna talk about the Function 

let a = 1
let b = 2
let c = 3
console.log("sum of a and b is ", a + b + c)

// for average 
console.log("Average of a and b is ",Average(a, b))
console.log("Average of a and b is ", (b+c)/2)
console.log("Average of a and b is ", (c+a)/2)

// we have use the average logic multiple times   
// // Function 
function Average(x, y){
    console.log("done")
    return Math.round ((x+y)/2)
}

function hello(){
    console.log("Hello")
}

console.log(hello)
hello();
// In this Session we are gonna talk about Arrays in js

// Arrays are variable which can hold more than one value .

let a = [13, 26, 39, 44, null, false , "Not Present"];
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7]) //It is gonna become Undefined 


// Checking the length
console.log("The length of array is  "+a.length)

// Adding a new value to array
a[7] = 67
console.log(a[7])

// Changing the value of an array 
a[0] = 99
console.log(a[0])

// Arrays are mutable it can be changed  
console.log(typeof a)
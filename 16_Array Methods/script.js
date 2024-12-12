// // In thius session we are gonna talk about Array Methods

// Conver Array into a String 
let num = [1, 45, 67, 3, 7]
let x = num.toString(); // x is now a String 
console.log(x)

// join all the Array with a String
let c = num.join("--")
console.log(c)
console.log(typeof c)

// Elemenate the last Element From the Element 
let a = num.pop(); // used for elemenating and give the pop element also
console.log(num, a)

// Add a new element to the array and give a new array 
let y = num.push(14) // Modifies the original Array and give the new length of the array 
console.log(num, y)

// Remove the First element of the Array 
let r = num.shift(); // r is goona give the removed element 
console.log(num, r) 

// Add new element in the Start and give the length of the array 
let u = num.unshift(89); // Adding the 89 in the start
console.log(num, u)


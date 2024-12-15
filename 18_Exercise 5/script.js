// In this session we are gonna talk about array methods or some Practice with usin array

// // // Problem 1
// // Create an array of numbers and take input from the user to add number to this array
// let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let z1 = prompt("Enter the Number");
// z1 = Number.parseInt(z);
// num.push(z1);
// console.log(num1);

// // // Problem 2
// // // keep adding numbers to the arrays in problem 1 until the user add 0 in the array
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a;
// do {
//   z = prompt("Enter the Number");
//   z = Number.parseInt(z);
//   num.push(z);
//   console.log(num);
// } while (z != 0);
// {
//   console.log(num);
// }

// // Problem 3
// Filter for numbers divisible by 5 from a given Array
let arr = [10, 5, 35, 70, 65, 43, 32];
let n = arr.filter((x) => {
  return x % 5 == 0;
});
console.log(n);

// // Problem 4
// Create an Array of square of given numbers
let arr1 = [10, 5, 35, 70, 65, 43, 32];
let m = arr1.map((value) => {
  return value * value;
});
console.log(m);

// // Problem 5
// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n bring the number whose factorial whose factorial needs to be calculated .)

let arr2 = [1, 2, 3, 4, 5]
let j = arr2.reduce((h1, h2) => {
  return h1 * h2
});

console.log(j);






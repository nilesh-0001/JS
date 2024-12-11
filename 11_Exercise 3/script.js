// // It was an Exercise Session based on Loops and Functions

// // Problem 1
// //  Write a Program to Print the marks of a Student in an object using for loop
let obj = {
  Nishu: 78,
  Sera: 34,
  irus: 67,
};

// For loop
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    "The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]
  );
}

// // Problem 2
// // Write the first question in For in loop
// For in Loop
for (let i in obj) {
  console.log(i + obj[i]);
}

// // Problem 3
// let cn = 15;
// let i;
// while (i != cn) {
//   console.log("Try again");
//   i = prompt("Enter the Number");
// }

// // Problem 4
const mean = (a, b, c, d) => {
  return (a + b + c + d)/4;
};


console.log(mean (4,5,6,8,))
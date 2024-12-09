// // It was an Exercise Session based on Expressions and Conditionals

// // Problem 1
// // Use Logical Operators to find whether the age of a person lies btw 10 and 20 ?
let age = prompt("What is your age ?");
age = Number.parseInt(age); // For converting the string into a number
if (age > 10 && age < 20) {
  alert("The age lies btw 10 and 20");
} else {
  alert("The age does not lie btw 10 and 20");
}

// Problem 2
// Demonstrate the use of Switch case statement in Js
let a = prompt("What is your age ?");
// a = Number.parseInt(a)
switch (a) {
  case "11":
    alert("Your age is 11");
    break;
  case "12":
    alert("Your age is 12");
    break;
  case "13":
    alert("Your age is 13");
    break;
  case "14":
    alert("Your age is 14");
    break;
  case "15":
    alert("Your age is 15");
  default:
    alert("Your age is not eligible for this tournament");
}

// // Problem 3
// // Write a JavaScript program to find whether a Number is Divisible by 2 and 3
let num = prompt("Enter the Number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  alert("The number is Divisible by 2 and 3");
} else {
  alert("The number is not Divisible by 2 and 3");
}

// // Problem 4
// // Write a JavaScript program to find whether a Number is Divisible by either 2 and 3
let num1 = prompt("Enter the Number");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("The number is Divisible by 2 and 3");
} else {
  console.log("The number is not Divisible by 2 and 3");
}

// // Problem 5
let age1 = 19 // ADD the age by yourself and test it !
let z = age1>18? "you can drive" : "You cannot Drive"
console.log(z)


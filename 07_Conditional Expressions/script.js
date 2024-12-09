// It was a session about Conditional Expressions

// Explain
// Sometimes we want to execute a certain kind of Statement with a specific Condition

// Example
let temperature = 25;
let weather;

if (temperature > 30) {
  weather = "Hot";
} else {
  weather = "Cool";
}

console.log(weather); // Output: "Cool"

// In this example when the temperature is greater than 30 it is gonna show the output hot or
// When the temperature is less than 30 it is gonna show the output cool

let a = prompt("Hey! What's your age");

a = Number.parseInt(a); // It was gonna convert the string into a number

console.log(typeof a);

// Another Example
// if (a>0){
//     alert("The age is Greater than 0 ")
// }
// //If the condition is true Then this statement is gonna apply
// else{
//     alert("The age is lesser than 0 ")
// }
// if the condition is false thane else statement is gonna apply

if (a < 0) {
  alert("The age is Invalid");
} else if (a < 9) {
  alert("Your age is not Valid For Driving");
} else if (a < 18 && a >= 9) {
  alert("You can Drive after 18 and make sure you have a driving liscense");
} else {
  alert("The age is valid for Driving");
}

// Quiz
// Write a Switch case statement

//Ternary Operators


let age = prompt("Hey! What's your age");

console.log("You can ", age > 18 ? "Drive" : "not Drive");

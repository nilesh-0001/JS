// // // The session is all about Loops in Js.

// // // For loop
// // // It was for adding first n natural no.
// let sum = 0;
// let n = prompt("Enter the value");
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum +=(i+1);
// }
// console.log("sum of " + n + " natural no.is " + sum);
// // We can also use var in the place of let cauze let is blocked scoped and var is globally scoped

// // Quick Quiz
// // // for loop
// // // It was for Multiplying first n natural no.
// // let sum = 1;
// // let n = prompt("Enter the value");
// // n = Number.parseInt(n)
// // for (let i = 0; i < n; i++) {
// //   sum *=i+1;
// // }
// // console.log("The multiple of first n natural no. is "+ sum);

// // // For in Loop

// let obj  = {

//     nishu : 59,
//     anshu : 56,
//     sera : 89,
//     irus : 33,
// }
// for(let a in obj){
//     console.log("The Total marks of " + a+" are " + obj[a])
// }

// //  // For of Loop
// for(let b of "Nilesh"){
//     console.log(b)
// }

// // While loops
// let a = prompt("Enter the vslue of a")
// a = Number.parseInt(a)

// let i = 0 ;
// while(i<a){
//     console.log(i)
//     i++;

// }

// // Do while loops
let a = prompt("Enter the vslue of a");
a = Number.parseInt(a);
let i = 0;
do {
  console.log(i);
  i++;
} while (i < a);

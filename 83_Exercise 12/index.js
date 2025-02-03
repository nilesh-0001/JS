// // Problem 1
// Write a JavaScript Program to Print The Following after two seconds delay
// Hello
// World

// Worst case senario
// setTimeout(()=>{
//     console.log("Hello")
// },2000)
// setTimeout(()=>{
//     console.log("World")
// },4000)
/*
const x = async(text)=>{
    return new Promise((reolve,reject)=>{
        setTimeout(()=>{
            reolve(text)
        },2000)
    })
}
(
   async()=>{
    let text = await x("Hello")
    console.log(text)
    text = await x("World")
    console.log(text)
   } 
)() */
// That was the best version

// // Problem 2
// Write a Javascript Program to find average of Numbers in an array using spread syntax .
/*
function sum(a,b,c){
    return a + b + c
}

let y =[4,3,5]
console.log(sum(...y));
*/
// // Problem 3
// Write a Javascript Function which resolves a Promise after n seconds . The Function takes n as the Parameter . use an IIFE to resolve the Functionwith Different values of n .
/*
const x = async(text, n =2)=>{
    return new Promise((reolve,reject)=>{
        setTimeout(()=>{
            reolve(text)
        },1000 * n)
    })
}
(
   async()=>{
    let text = await x("I am resolving after 4 seconds",4)
    console.log(text)
    text = await x("I am resolving after 2 seconds",2)
    console.log(text)
   } 
)() */
// // Problem 4
// Write a Simple interest calculator using JavaScript .
/*
function simpleinterestcalculator(p, r, t) {
  return p * r * t / 100
}

console.log(simpleinterestcalculator(1000 , 10 , 2))
*/
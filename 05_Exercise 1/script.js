// //Problem 1 
// //Create a variable of type string and try to add a number to it ?
let a = "Nishu"
let b = 4
console.log(a+b)

// //Problem 2 
// //use type of Operator to find the datatype of the string in the previous question ?
console.log(typeof (a+b))

// //Problem 3
// //Create a const object in Js can you change it to hold a number a later ?
const info =  {
    "Nishu" : 59,
    "Anshu" : 89,
    "Sera" : true,
} 
// no it is not possible

//Problem 4
//try to add a new key to the const object in the previous question are you able to do it ?
console.log(info)
info[`Friend`] = false
info[`Nishu`] = false
console.log(info)

// //Problem 5 
//Write a Js Program to create a Dictionary of three words ? 
    const dict = {
        Brainiac: "A very intelligent person",
        Pyromancy: "The act of attempting to tell the future using fire",
        Orator: "Someone who is skilled at making formal speeches",
        
    }

        console.log(dict.Orator)

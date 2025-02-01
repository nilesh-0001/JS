// Hoisting is (to many developers) an unknown or overlooked
// behavior of JavaScript. If a developer doesn't understand hoisting,
// programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the
// beginning of every scope.
// Since this is how JavaScript interprets the code,
// it is always a good rule.

// following two linws will run successfully due to Javascript hoisting
// let a ;
console.log(a)
greet()

function greet(){
    console.log("Good Morning")
}
var a = 9  // Declaration hoisted to the top but initialization is not 
console.log(a)
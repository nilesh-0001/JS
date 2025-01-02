// In this session we are gonna talk about the Promises
// /The Solution to the callback hell is Promises 
let promise = new Promise(function(resolve,reject){
    console.log("Promise Print")
    resolve(56)
})
console.log("Hello 1")
setTimeout(function(){
    console.log("Hello 2")
},2000)
console.log("This is Hello 3")


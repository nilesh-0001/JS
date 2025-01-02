// In this session we are gonna talk about  Promise Api

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Value 1")
        reject(new Error("Error Found in Promise"))
    },1000)
})
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 2")
    },2000)
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value 3")
    },3000)
})

// p.then((value)=>{
//     console.log(value)
// })
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })

// There are 6 static methods of Promise class !

// 1 -- Promise.all
// Wait for all promises to resolve and returns the array of their results. If anyone fails, it becomes the error and all other results are ignored.
// ASSAN BHASA mai(It is gonna wait and Print all the Promises at one time in the form of array but if there was any error present inn the given Promises it is not gonna Print).
// let Promise_all = Promise.all([p,p1,p2])
// Promise_all.then((value)=>{
//     console.log(value)
// })

// 2 -- Promise.allSettled
// Wait for all promises to settles and return their results an array of objects with status and value .
// ASSAN BHASA mai((It is gonna wait and Print all the Promises at one time in the form of array if there was any error present in the given Promises it is gonna Print it too).
// let Promise_allSettled = Promise.allSettled([p,p1,p2])
// Promise_allSettled.then((value)=>{
//     console.log(value)
// })

// 3 -- Promise.race
// Wait for the first promise to settle and its result/error becomes the outcome .
// ASSAN BHASA mai(It is gonna Print those Promise who fullfill First in the measure of SetTimeout).
// let Promise_race = Promise.race([p,p1,p2])
// Promise_race.then((value)=>{
//     console.log(value)
// })

// 4 -- Promise.any
// Waits for the first Promise to fullfill( & not Required), and it results become the outcome ,Throws aggregate error if all the Promises are Rejected .
// ASSAN BHASA mai(It is gonna Print those Promise who fullfill First in the measure of SetTimeout if the first one is an Error then it's gonna Print the second Fastest, else if all the Promise is in error then in the End it's gonna Show error).
// let Promise_any = Promise.any([p,p1,p2])
// Promise_any.then((value)=>{
//     console.log(value)
// })

// 5 -- Promise.resolve 
// Mark a resolve Promise with the given value .
// ASSAN BHASA mai(It is gonna give us a resolve Promise with our given value).
// let Promise_resolve = Promise.resolve(5)
// Promise_resolve.then((value)=>{
//     setTimeout(()=>{
//         console.log(value)
//     },5000)
// })

// 6 -- Promise.reject
// Mark a Rejected Promise with the given error .
// ASSAN BHASA mai(It is gonna return the rejected Promise with the given value).
// let Promise_reject = Promise.reject(new Error("Error 1"))
// Promise_reject.then((value)=>{
//     console.log(value)
// })

// In this session we are gonna talk about the then and catch method in promises
let p = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Promise is FullFilled");
    resolve(true)
    // reject(new Error("Error"));
  }, 5000);
});
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("Promise is rejected");
    // resolve(true)
    reject(new Error("Found Error"));
  }, 5000);
});
console.log(p,p1);

// It is for getting the value of p
p.then((value)=>{
    console.log(value)
})

// It is applicable for not showing error in console
// p1.catch((error)=>{
//     console.log("Error")
// })
p1.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})




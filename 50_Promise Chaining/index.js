// In this session we are gonna talk about the Promise-Chaining

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Promise 1 appear after 2 seconds")
//         resolve(56)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise 2")
//         },2000)
//     })
// }).then((value)=>{
//     console.log("Done")
//     return 3
// }).then((value)=>{
//     console.log("Final Complete")
// })

// Quick Quiz
// ReWrite the LoadScript Function we wrote in the beginning of the chapter using promises

const LoadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script Load Succesful");
    };
    script.onerror = () => {
      reject("Site Under Maintainence");
    };
  });
};
let script = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

script.then((value)=>{
    console.log("First script load ")
    return LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

}).then((value)=>{
console.log("Second Script loaded")
}).catch((error)=>{
    console.log("Found an error")
})
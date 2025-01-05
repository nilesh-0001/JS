// // Problem 1
// Write a Program to load a JavaScript file in a browser using Promises .  Use .then() to dispaly an alert when the load is Complete ?
/* const Load =(src)=>{
return new Promise((resolve,reject)=>{
    let script = document.createElement("script")
    script.src = src
    script.onload = ()=>{
       resolve(src + " Done")
    }
    document.head.append(script)
})
}
let q = Load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
q.then((value)=>{
    console.log(value)
}) */
// // Problem 2
// Write the same Program from Previous question and use async await syntax ?
/* const m = async ()=>{
    console.log(new Date().getMilliseconds())
    let x = await Load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    console.log(x)
    console.log(new Date().getMilliseconds())
}
m(); */

// // Problem 3
// Create a Promise which reject after 3 seconds use an async awaits to get it value , Use a try catch to handle its error
/* let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("It is a error"));
    }, 3000);
  });
};
let Data = async () => {
  try {
    let x = await a();
    console.log(x);
  } catch (err) {
    console.log(err);
  }
};
Data();
*/
// // Problem 4
// Write a Program usinhg Promise.all() inside an async/await 3 Promises . Compare its results with the case where we await these Promises one by one ?
let x1 = async () => {
  return new Promise((reolve, reject) => {
    setTimeout(() => {
      reolve(10);
    }, 1000);
  });
};
let x2 = async () => {
  return new Promise((reolve, reject) => {
    setTimeout(() => {
      reolve(20);
    }, 4000);
  });
};
let x3 = async () => {
  return new Promise((reolve, reject) => {
    setTimeout(() => {
      reolve(30);
    }, 6000);
  });
};

const prm = async () => {
  // console.time("run")
  // let z1 = await x1();
  // let z2 = await x2();
  // let z3 = await x3();
  // console.log(z1,z2,z3)
  // console.timeEnd("run")
  console.time("run");
  let z1 = x1();
  let z2 = x2();
  let z3 = x3();
  let y = await Promise.all([z1, z2, z3]);
  console.log(y);
  console.timeEnd("run");
};
prm();

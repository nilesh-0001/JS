// In this Session we are gonna talk about the Synchronus Programming and AsynChronus Programming or also about the callbacks.

// Synchronus Programming
// synchronus programming are the actions that initiate and finish one by one

// let a = prompt("What is Your name ?")
// let z = prompt("What is Your age ?")
// let x = prompt("What is Your fav Color ?")

// console.log("My name is " + a + " with the age of " + z + " and Fav color is " + x)

// AsynChronus Programming
// asynchronus programming are the actions that we initiate now and they finish later Ex - setTimeout
// console.log("Start");
// // It was gonna set the console.log() to apperar after 5000 miliseconds
// setTimeout(function () {
//   console.log("It is a timeout function and appeared in 5 seconds");
// }, 5000);
// console.log("End");

// Callbacks
function loadscript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded sript with SRC : " + src);
    callback(null, src);
  };
  script.onerror = function () {
    alert("Error Loading sript with SRC : " + src);
    callback(new Error("src got some Error"));
  };
  document.body.(script);
}
function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Hello World " + src);
}
function Morning(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Good Morning " + src);
}

loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  Morning
);

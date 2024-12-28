// In this session we are gonna talk about the Event Listener

let x = function (e) {
    console.log(e.target)
    console.log(e.type, e.clientX, e.clientY )
    console.log(e)
//   alert("Hello World! 1");
};
let y = function (e) {
    console.log(e)
  alert("Hello World! 2");
};
btn.addEventListener("click", x);

// btn.addEventListener("click", y);

// let a = prompt("Enter the number");
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }

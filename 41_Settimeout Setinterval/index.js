// In this session we are gonna talk about setinterval and settimeout

// SetTimeout
// alert("Warning");

// const sum = (a, b, c) => {
//   console.log("Function is Working " + (a + b));
//   a + b + c;
// };
// setTimeout(sum, 1000, 1, 2, 10);
// The 5000 is indicate 5000 miliseconds = 5 seconds that means that alert is gonna work after 5 seconds
// let a = setTimeout(function(){
//     alert("2nd Warning")
// },5000)
// let x = prompt("Do you want to run the settimeout ?")
// if("n"==x){
//     clearTimeout(a)
// }

// console.log(a)

// setInterval()
// this function is gonna work continuously 
setInterval(function (a, b, c) {
  console.log("2nd Function is working  ",a + b + c);
  a + b + c;
});

setInterval(2000, 10, 20, 30);
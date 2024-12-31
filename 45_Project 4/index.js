// Create a Digital Seconds Clock using SetInterval and Date object in JavaScript
// The Date object can be used to get the date time , hours and Seconds which can be updated using SetInterval .
// Try to Keep the UI Good Looking

// Solution

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
console.log(h, m, s, d);
// It was usefull for creating the current date and Time 

// It was usefull for getting the current Date and Current Time 
console.log(new Date())

// It was only for Date 
console.log(new Date().toDateString())

// It was only for Time 
console.log(new Date().toTimeString())

setInterval(()=>{
    let d = new Date()
    time.innerHTML = d
},1000)


// Please add the Good UI in it ? 
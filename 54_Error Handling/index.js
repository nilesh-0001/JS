// In this session we are gonna talk about the Error Handling .
setTimeout(() => {
  console.log("Hacking wifi..... Please wait...");
}, 1000);
setTimeout(() => {
  console.log("Fetching username and Password..... Please wait...");
}, 2000);
setTimeout(()=>{
    // The Try and Catch syntax is used for error handling
    // We can also use try and catch in Sheduled Function but cannot use sheduled function in try and catch
    try {
        console.log(Nilesh);
      } catch (err) {
        console.log(err);
      }
},5000)
setTimeout(() => {
  console.log("Hacked Nilesh Instagram..... Please wait...");
}, 3000);
setTimeout(() => {
  console.log("Username and Password is Fetched..... Please wait...");
}, 4000);

// // In this Session we are gonna talk about How to Fetch API 
let x = fetch("https://goweather.herokuapp.com/weather/India")
x.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    //It was for getting all the values in Object format 
    return response.json()
    // It was for getting all the value in string format
    // return response.text()
}).then((value)=>{
    console.log(value)
})

// the 2nd Example of Fetching API 
// let v = fetch("https://randomuser.me/api/")
// v.then((response) => {
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
//   }).then((response) => {
//     console.log(response)
//   })
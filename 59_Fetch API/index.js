// In this Session we are gonna talk about How to Fetch API 
let x = fetch("https://goweather.herokuapp.com/weather/Ny")
x.then((response)=>{
    return response.json()
}).then((value)=>{
    console.log(value)
})
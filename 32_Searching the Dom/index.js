// In this session we are gonna talk about The searching in the Dom 

// Change the card-title color to cyan 
//By getElementsByClassName()

// let ctitle = document.body.getElementsByClassName("card-title")[0]
// ctitle.style.color = "blue"


// Change the card-title color to Red
// getElementById()

let ccolor = document.getElementById("color")
ccolor.style.color = "red"


// Change the all card-title color to pink
// querySelectorAll

let allcolor = document.querySelectorAll(".card-title")
allcolor[0].style.color = "red"
allcolor[1].style.color = "blue"
allcolor[2].style.color = "green"
console.log(allcolor)

document.querySelector(".me").style.color = "black"
document.querySelector(".me").style.background = "lightgrey"
document.querySelector(".me").style.border = "none"

// Get element by tag
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card ").getElementsByTagName("a"))

// grt element by name
console.log(document.getElementsByName("search"))
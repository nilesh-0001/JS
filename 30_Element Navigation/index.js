// In this session we are gonna talk about how to access the elements directly 

// It was a Function to change the firstElementchild color to color by calling this function 
const colorchange = ()=>{
    document.body.firstElementChild.style.background = "yellow"
}

// it refers to the body element 
let x = document.body


// It was gonna Show all type of nodes which comes first 
console.log("First child of x is ", x.firstChild) 

// It was gonna show the first element which is gonna comes in the body 
console.log("First element child of x is ", x.firstElementChild) 

// Examples

// document.parentElement

// document.nextSibling(Element)

// document.firstElementChild

// document.lastElementChild
 


// In this session we are gonna talk about the children 

// Children of an Element  
// Direct as well as Deeply nested element of an element are called its children

// Child nodes 
// Elements that are direct children ex -- head & body are children of an <html> 

// Descendant nodes 
// All nested elements , children, their children and so on......

// firstchild
// lastchild
// childnodes
console.log(document.body.firstChild)
console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// Defination
// document.body.childNodes[0] === document.body.firstChild
// document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild 

// There is also a method element.haschildnodes() to check whether there are any child nodes

let arr = Array.from(document.body.childNodes)
console.log(arr) 

// Note :
// Childnodes loooks like an Array but iits not actually an array but a collection . we can use Array.from(collection) to convert it into an array 
// Array methods wont work 

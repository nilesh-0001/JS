// In this session we are gonna talk about Html Attributes 

// Method use to get the value of an attribute
let a = First.getAttribute("class")
console.log(a)

// Method to check for existence of an attribute
console.log(First.hasAttribute("class"))
console.log(First.hasAttribute("style"))

// Method to set an attribute or the value
// First.setAttribute("hidden" , "true")
First.setAttribute("class" , "true Nishu")

// Method to remove an Attribute
First.removeAttribute("class")

// Method to get colllection of attributes 
console.log(First.attributes)

// Data-Custom // It was a Custom data and reserved for programmer use 
console.log(First.dataset);
console.log(First.dataset.game);
console.log(First.dataset.player);
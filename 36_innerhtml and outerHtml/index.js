// In this session we are gonna talk about innerHtml and outerHtml or console.dir

// It was gonna Print the span tag 
console.log(document.getElementsByTagName("span")[0])

// It was gonna print the properties of span 
console.dir(document.getElementsByTagName("span")[0])

// tag name and node name 

// Node name 
console.log(document.body.firstChild.nodeName)

// Tag name 
console.log(document.body.firstElementChild.nodeName)

// Code on line 4 nad 15 work same 

// innerhtml and outerhtml

// innerhtml
// The inner html property allows to get the html inside the element as a string (Valid for element nodes only)

// outerhtml
// The outer Html property contains inner + the element itself

/* id1.outerHTML = '<span id="id1">My name is Nishu</span>'
 id1.innerHTML = 'My name is Nishu' */

// other important to get value 

/* document.body.firstChild.nodeValue
document.body.firstChild.data */

// To get all the Text in the website 
console.log(document.body.textContent)

// It was goona show the Hidden text or Element in the body 
// $0.hidden = false
// false



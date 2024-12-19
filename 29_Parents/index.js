// In this session we are talk about how we can access the parents in the Dom manipulation 

// Notes on DOM collection

/* They are for read only
   They are iterable using for... of loop
   They are live  element.childNodes variable reference will automatically update if child.Nodes of elements is changed
*/

// Siblings
// siblings are nodes that children of the same parent 

// nextSibling
// the next sibling from the selected sibling


// Example 
console.log(document.body.firstChild)
 a = document.body.firstChild

// Parent node
console.log(a.parentNode)

// Parent element 
console.log(a.parentElement)

console.log(a.nextSibling)
//  In this session we are gonna talk about the ProtoType in Js.
let a = {
    name:"Nilesh", 
    job:"Frontend Developer",
    al : ()=>{
        alert("self run")
    },
}
console.log(a)

let x = {
    al : ()=>{
        alert("run")
    }
}
x.__proto__ = {
    name1 : "Nishu"
}
a.__proto__ = x
a.al()
console.log(a.name1)

/*
JavaScript objects have a special property called "prototype," 
which is either null or references another object.

This allows for "prototypal inheritance," meaning if we try to 
access a property in an object that is missing, JavaScript 
automatically looks for it in the prototype.

**Setting Prototype**
We can set a prototype by assigning to the `__proto__` property.

If a property or method is not found in the object itself but exists 
in the prototype, JavaScript retrieves it from the prototype. 
However, if the object has its own property or method with the same 
name, it will take precedence over the one in the prototype.
*/

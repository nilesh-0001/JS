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
 JavaScript obiects have a special Property called
Prototype that is either null or ' references
amother ohject

When we try to read a Property from a Prototype
and its missing, JavaScript automatically takes it
fron the Prototype . This is callid "prototypal inheritence

// Setting Protetype

We can Set Prototype by setting __proto__
Now if we read A Property fom the object
Which is not in object and is present in the
Prototype JavaScript will take it from prototype

If we have A method in object it will be Called
from the object. If its missing in object And
present in ' Prototype, its called from the Prototype.
 */
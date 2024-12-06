// nn bb ss u
//Primitive Datatypes 
let a = null;
let b = 67;
let c = true; // can also be false
let d = BigInt("45") + BigInt("45")
let e = "Nilesh";
let f = Symbol("Symbol");
let g = undefined;

//Non Primitive Datatypes  {Objects in js }
console.log(a, b, c, d, e, f, g)
console.log(typeof e)

const items = {
    "Nishu" : true,
    "Anshu" : 67,
    "irus" : false,
    "Mihir" : undefined
}
console.log(items["Nishu"])
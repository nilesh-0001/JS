let arr = [3,6,8,5,9,1,75,12,43,32]
// let a = arr[4]
// let b = arr[7]  // no need to do this 
// let [a,b,c,d, ...rest] = arr
// console.log(a,b,c,d,rest)
// let [a,,,b, ...rest] = arr
// console.log(a,b,rest)

let {a,b} = {a:1,b:9}
console.log(a,b)

let arr1 = [3,7,9]
let obj1= { ...arr1}
console.log(obj1)

function sum (v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

let obj2 = {
    user : "Anshul",
    company : "Company XYZ",
    adress :  "XYZ",
    Role : "Frontend",
}

console.log({...obj2,user:"Nishu"})
// console.log({user:"Nishu",...obj2}) // this is not gonna change the value of obj2 element coz obj2 has to be in the Front.
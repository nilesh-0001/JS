// In this session we are gonna talk about the Error Object.

try{
    let age = prompt("Enter your age ?")
    age = Number.parseInt(age)
    if(age>120){
        throw new ReferenceError("Enter valid Age")
    }
}
catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
console.log("The Function is Still Running")

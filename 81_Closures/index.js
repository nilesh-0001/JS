// In this session we are gonna talk about the closures

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     name = "Nishu"
//     return displayName
//   }
//   let c = init();
//   c()
  
// let message = "Good Night"
//   function hello1(){
//   let  message = "Good Morning"
    
//     //  let message = "Good AfterNoon"
//     console.log("Hello1 : " + message)
    
//    let c = function hello2(){
//     console.log("I am c " + message)
//    }
//    return c
//   }

//  c= hello1()
//  c()

function returnfunc (){
const x = ()=>{
  let a = 1
  console.log(a)
  const y = ()=>{
    // let a = 2
    console.log(a)
    const z =()=>{
      // let a = 3
      console.log(a)
      
    }
    z()
  }
  a = 999
  y()
}
return x
}
let a  =  returnfunc()
a()

// closure = closure is a Function along with its lexical Enviorment or when with a Function we also get its binded lexical Enviormnt 
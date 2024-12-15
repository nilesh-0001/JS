// In this session we are gonna talk about the console methods in js 

// It is used for info , It tells you about the all method in console
console.log(console)

// It is used for printing
console.log("Nishu")

// It is used for showcasing the error
console.error("It was an Error")

// It is used to check a Statement is true or not 
console.assert(5 > 2)
// if {
//     the condition is false it will showcase you the false at that point 
// }
// else{
//     if it is true nothing will happened 
// }

// it is used to clear the console
console.clear()

// It will gonna showcase you the object in the tabular form 
  let obj = { 
    a:1,
    b:2,
    c:3,
}
console.table(obj)

// It is used for warnings 
console.warn("It was used for warning")
 
// It is used to showcase the information
console.info("It was used for Info")

// It is used for measuring how much time a function take to process 
console.time("a")



console.timeEnd("a")

// Example 1

console.time("Loop")

for(i=0;i<5;i++){
    console.log(56)
}

console.timeEnd("Loop")

// Example 2

console.time("whileLoop");

let i = 0;
while (i < 5) {
    console.log(56);
    i++;
}

console.timeEnd("whileLoop");

// // In this session we are gonna talk about Arrays with Loops

// For Loop with Array
let num = [11, 21, 31, 41, 51];
for (i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// For each loop
// It is used for squaring the Array num
num.forEach((element)=>{
    console.log(element*element)
})

// Array.from()
// It is gonna make "me" variable into Array
let me = "Nishu"
let arr = Array.from(me)
console.log(arr)

// for of 
// It is for easy access of array value 
for(let it of num){
    console.log(it)
}

// for in
// It is for easy access of array key 
for(let item in num){
    console.log(item)
}



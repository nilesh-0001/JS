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

// We are gonna talk about some Advance methods here

// Map Method
// It is used for making a new Array but it was not gonna affect he previous array
let array = [9, 5, 6, 7, 1];
let z = array.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(z);
// console.log(array)

// Filter method
// It is used for find any array with a filter like you want to find those number who was less than 50
let arr1 = [12, 34, 3, 56, 78, 89, 90];
let a2 = arr1.filter((o) => {
  return o > 50;
});
console.log(a2,arr1)

// Reduce method
// let m = [1, 3, 4, 5, 6];
// const reduce_fun = m.reduce((h1, h2)=>{
//     return h1 + h2
// })
// let n = m.reduce(reduce_fun)
// console.log(n)

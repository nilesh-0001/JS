// // Problem 1
// What will the following print in Js ? 
let me = "Nis\"hu"
console.log(me.length)

// // Problem 2
//Explore the includes ,Starts with & end with Function of a String 


// Includes
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

console.log(sentence.includes(word))


// Startswith 
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false


// Endswith
const str2 = 'Cats are the best!';

console.log(str2.endsWith('best!'));
// Expected output: true

console.log(str2.endsWith('best', 17));
// Expected output: true

// // Problem 3
// Write a program to convert a given String to lowercase 
let to = "Nilesh"
console.log(to.toLowerCase())

// // Problem 4
// Extract the amount of this string 

let amo = "Please give rs 1000"
let amount =  amo.slice("Please give rs ".length)
console.log(amount)
console.log(typeof amount)

// // Problem 5
let friend = "Sera"
friend[1] = "R"
console.log(friend)




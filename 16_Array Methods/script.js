// // In thius session we are gonna talk about Array Methods

// Convert Array into a String
// tostring()
let num = [1, 45, 67, 3, 7];
let x = num.toString(); // x is now a String
console.log(x);

// join all the Array with a String
// join()
let c = num.join("--");
console.log(c);
console.log(typeof c);

// Elemenate the last Element From the Element
// pop()
let a = num.pop(); // used for elemenating and give the pop element also
console.log(num, a);

// Add a new element to the array and give a new array
// push()
let y = num.push(14); // Modifies the original Array and give the new length of the array
console.log(num, y);

// Remove the First element of the Array
// shift()
let r = num.shift(); // r is goona give the removed element
console.log(num, r);

// Add new element in the Start and give the length of the array
// unshift()
let u = num.unshift(89); // Adding the 89 in the start
console.log(num, u);

// Delete Operator
// delete
let sum = [1, 2, 3, 4, 5];

delete sum[0]; // It was gonna delete the array value but not gonna affect the Array length
console.log(sum);
console.log(sum.length);

// Join Array two or more than two
// concat()
let num1 = [1, 2, 3, 4, 5, 6];
let num2 = [11, 21, 31, 41, 51, 61];
let num3 = [71, 72, 73, 74, 75, 76];

let narray = num1.concat(num2, num3); // it is Gonna add all the three arrays together
console.log(narray);
console.log(num1, num2, num3);

// sort an Array by Alphabetically
// sort()   // It was very important to Know briefly about this method
let tl = [2, 11, 34, 5, 78, 64, 34, 90];
tl.sort(); // It was gonna modify the orignal array
console.log(tl);

// Sort by Compare Function
let compare = (a, b) => {
  return a - b;
};
tl.sort(compare);
console.log(tl);

// Reverse the element
// reverse()
tl.reverse()
console.log(tl)

// It was used to add new items to Array 
// splice()
let New = [1, 2, 3, 4, 5, 6];
New.splice(3, 3, 21, 43, 67)  
let deletedValues = New.splice(3, 3, 21, 43, 67)  
console.log(deletedValues)
console.log(New)

// It Cretes a new Array
let New1 = [1, 2, 3, 4, 5, 6];
let newnum = New1.slice(3, 5)
console.log(newnum)

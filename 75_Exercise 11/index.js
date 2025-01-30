// // Problem 1
// Create a JavaScript class to create a complex number Create a Constructor to set the real and the complex part ?
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  // // Problem 2
  // Write a Method to add two complex number in the above class ?
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
  // // Problem 5
// Use getters and setters to set and get the real and imaginary Parts of the complex Number ?
  get real (){
    return this._real
  }
  get imaginary (){
    return this._imaginary
  }

  set imaginary (newImaginary){
    this._imaginary = newImaginary
  }
  set real (newreal){
    this._real = newreal
  }
}
let a = new Complex(2, 6);
console.log(a.real, a.imaginary)
a.real = 10 
a.imaginary = 10
let x = new Complex(2, 2);
a.add(x)
console.log(`${a.real} + ${a.imaginary}i`);

// // Problem 3
// Create a class student from a class human override a method and see changes ?
class Human {
    constructor(name,food){
        this.name = name
        this.food = food
    }
    walk(){
        console.log(this.name + " Human is Walking")
    }
}
class Student extends Human {
    walk(){
        console.log(this.name + " Student is Walking")
    }
}
let S = new Student("Nishu" , "Apple")
S.walk()

// // Problem 4
// See if Student is an Instance of Human using Instanceof keyword ?
console.log( S instanceof Human)


// In this session we are gonna talk about the Arrow Function

const sayhello = (name, greet) => {
  console.log("Hello : " + " " + name );
  console.log("Hi")
};
// We can also use this method in arrow function , but it is not recommended
sayhello("Nishu", "Good Morning")

const x = {
  Name: "Nishu",
  Role: "Web Developer",
  exp: 5,
  show: function () {
    // let that = this
    // console.log(this)
    setTimeout(() => {
      console.log(
        `The name is ${this.Name}\nThe role is ${this.Role}\nAnd the Experience is ${this.exp} years`
      );
    });
  },
};
// we can use arrow function here coz arrow function take this from her lexical Enviorment and without arrow function we have to store this in a variable and then we can use it .
// console.log(x.Name, x.Role , x.exp)
x.show();

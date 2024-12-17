// // Problem 1
// Write a js program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive ! or not
const Game = () => {
  let age = prompt("Enter the age");
  age = Number.parseInt(age);

  if (age > 18) {
    alert("You can Drive!");
    // // Problem 2
    // In the previous question , use console.error to log the error if the age is negative
  } else if (age < 0) {
    alert("Enter the correct age");
  } else if (age < 18) {
    alert("You cannot Drive !");
  } else {
    alert("Enter the correct age in Number");
  }
  // // Problem 3
  // In problem 1 use confirm to ask the user if he wants to see the prompt again

  let confr = confirm("Do you want to Enter the age again");
  if (confr) {
    Game();
  } else {
    alert("Congratulations ! You sign-in is Done");
  }
};
Game();

// // Problem 4
// Write a PerformanceNavigationTimingm to change the url to Google.com (redirection) if users Enter a greater number than 4
let number = prompt("Enter the number");
number = Number.parseInt(number);

if (number > 4) {
  location.href = "https://google.com";
}

// // Problem 5
// Change the background of the page to any color based on the user input

let color = prompt("Enter the color you want to et as a Background")
document.body.style.background = color;

// Alternative code for problem 1,2,3,4

/* const candrive = (age) => {
  return age >= 18 ? true : false;
};

let again = true;

while (again) {
  let age = prompt("Enter the age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Enter a valid age");
    break;
  }

  if (candrive(age)) {
    alert("Your age is eligible for Driving");
  } else {
    alert("Your age is not eligible for Driving");
  }
  again = confirm("Do you want to enter the age again ?");
} */

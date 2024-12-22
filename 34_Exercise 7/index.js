// // Problem 1
// Create a navbar and change the color of its first element to red  
let ccolor = document.body.getElementsByTagName("a")[0];
ccolor.style.color = "red";

// // Problem 2
// Create a table without tbody . Now use view Page source  button to check whether it has a tbody or not ?
// in the view page source it is not gonna show the tbody but in the developer it was gonna show the tbody automatically 

// // Problem 3
// create a Element with 3 children Now the change the color of the first and last element to green 
document.body.getElementsByClassName("child")[0].firstElementChild.style.color = "green"
document.body.getElementsByClassName("child")[0].lastElementChild.style.color = "green"

// // Problem 4
// write a JavaScript code to change background of all <li> tags to cyan 
Array.from(document.body.getElementsByClassName("child")).forEach(element => {
    element.style.background = "cyan"
});
// // Problem 5
// Which of the following is used to look for the farthest ancestors that matches a given css selector?

// a : matches
// b : closest
// c : contains
// d : none of the above

// And the answer is d : none of the above
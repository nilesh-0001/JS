// In this lesson we are gonna talk about the Javascript interactions with Browser
// They all are gonna use in your browser means run your html file connected woth js file by script tag

// alert()
alert("Hi ! Iam Here")

// prompt()
let z = prompt("Enter the number", "43")
z = Number.parseInt(z)
alert("You entered " + z + " With a type of " +( typeof z))

document.write(z) //FOr Printing the value z in html file until the user reload  it 

// confirm()
let opinion = confirm("Do you want to delete it ")
if(opinion){
    document.write(opinion)
}
else{
    document.write(" please Write the number ")
}
 
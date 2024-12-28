// In this session we are gonna talk about the browser events 
// All event is a signal that something has happened, All the the DOM nodes generate some signals !

// Thiu is gonna overwrite the html Events
let a = document.getElementsByClassName("box")[0]
a.onclick = () =>{
    let b = document.getElementsByClassName("box")[0]
    b.innerHTML = "JavaScript Working "
}





 
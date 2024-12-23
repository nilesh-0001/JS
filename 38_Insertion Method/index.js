// In thius session we are gonna talk about the Html Insertion method

let x = document.getElementsByTagName("div")[0];

// It is goona add the <h1>Nilesh-Bisht</h1 in the firest div
// x.innerHTML = x.innerHTML + "<h1>Nilesh-Bisht</h1>";

// It is gonna create a new Element 
let div = document.createElement("div");
div.innerHTML = "<h1>Nilesh-Bisht</h1>";

// Some imporatant methods
// x.appendChild(div);
// x.prepend(div);
// x.before(div);
// x.after(div);  
// x.replaceWith(div);




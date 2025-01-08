// In this session we are gonna talk about the Cookies in JavaScript
console.log(document.cookie)
document.cookie = "name=Nishu07102005"
document.cookie = "name2=Nishu071020052" // It is not gonna OverWrite the cookie it was just gonna add it
document.cookie = "name=Nishu";
console.log(document.cookie)
let key = prompt("Enter the Key")
let value = prompt("Enter the value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// The encodeURIComponent is used for collecting special in a coded form and for Decoding we use decodeURIComponent
// An Assignment to doccument.cookie is treated specially in a way that the write operations does,t touch the other cookies
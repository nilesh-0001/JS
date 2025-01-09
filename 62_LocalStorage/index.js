// In this session we are gonna talk about the LocalStorage
// localStorage.setItem("Name","Nishu")
let key = prompt('Enter the key ')
let value = prompt('Enter the value ')

// SetItem()
localStorage.setItem(key,value)
// GetItem()
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
// removeItem()
if(key == "red" || key == "blue"){
    localStorage.removeItem(key)
}
// clear
if(key==0){
    localStorage.clear()
}
//Length
console.log(localStorage.length)

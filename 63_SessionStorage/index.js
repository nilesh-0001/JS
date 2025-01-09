// In this session we are gonna talk about the sessionStorage method
// It is very similar to LocalStorage but it just stores the value and key to the refresh only .

sessionStorage.setItem("Name","Nishu")
sessionStorage.setItem("Name1","Nishu1")
sessionStorage.setItem("Name2","Nishu2")
sessionStorage.setItem("Name3","Nishu3")
sessionStorage.setItem("Name4","Nishu4")
sessionStorage.setItem("Name5","Nishu5")

sessionStorage.removeItem("Name")
// sessionStorage.clear()


// ALL the methods are similar to localStorage
// StorageEvent  // It is For checking the changes in the LocalStorage
window.onstorage = (x)=>{
    alert("c")
    console.log(x)
}

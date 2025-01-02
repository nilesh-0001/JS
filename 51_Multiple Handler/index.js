let p = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },2000)
})

// Using Multiple handlers for p
p.then((value)=>{
    console.log("The Promise is resolved")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4)
        },5000)
    })
}).then((value)=>{
    console.log(value)
})

p.then((value)=>{
    setTimeout(()=>{
        console.log("Data Fetching")
    },2000)
})


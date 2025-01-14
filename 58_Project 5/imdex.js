// Write a JavaScript Program to look Like a Hacker write an async Function which will simply display the following output :
// Initializing hack Program...
// Hacking xyz usename...
// Username found xyz...
// Connecting to social media handles...
let a = [
    "Initializing Hack Program....",
    "Connecting to the Server....",
    "Applying Brute Force....",
    "100K Password tried....",
    "Match not Found....",
    "Another 100k Passwords tried....",
    "Match not Found....",
    "Another 100k Passwords tried....",
    "Match Found....",
    "Password : A@!23*******....",
    "Retrieving the Facebook Initials.... ",
    "Fetched all Data....",
    "Connecting to the  Next Server....",
    "Applying Brute Force....",
    "100K Password tried",
    "Match not Found",
    "Another 100k Passwords tried",
    "Match Found",
    "Password : Q2rt$*******",
    "Retrieving the Instagram Initials ",
    "Fetched all Data",
    "Connecting to the  Next Server",
    "Applying Brute Force....",
    "100K Password tried....",
    "Match not Found....",
    "Another 100k Passwords tried....",
    "Match not Found....",
    "Another 100k Passwords tried....",
    "Match not Found....",
    "Another 100k Passwords tried....",
    "Match Found....",
    "Password : Anshu******....",
    "Retrieving the Phone Initials....",
    "Fetched all Data....",
    "Taking the access of Phone....",
    "Access Complete....",
    "Phone no. of user : 931*******....",
]
const sleep = async (seconds)=>{
    return new Promise((reolve,reject)=>{
        setTimeout(()=>{
        reolve(true)
        },seconds * 1000)
    })
}
const showhack = async (message)=>{
   await sleep(2)
   hack.innerHTML = hack.innerHTML + message + "<br>" + "<br>"
// console.log(message)
}
(async ()=>{
    for(let i = 0 ; i<a.length;i++)
       await showhack(a[i])
})()

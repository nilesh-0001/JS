// Use JavaScript to create a game of snake,water and gun . The game Should ask you to Enter S, W or G . The computer should able to randomly generate S, w or G and declare win or loss using alert Use Confirm and prompt whenever required .

let user = prompt("Enter your Choice")
let cpui = Math.floor(Math.random()*3)
let cpu = ["S","W","G"][cpui]
const match =(cpu,user)=> {
    if(cpu===user){
        return "Nobody"
    }
    else if(cpu === "S" && user === "G"){
        return "user"
    }
    else if(cpu === "S" && user === "W"){
        return "cpu"
    }
    else if(cpu === "W" && user === "S"){
        return "user"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu"
    }
    else if(cpu === "G" && user === "W"){
        return "user"
    }

}
let result = match(cpu, user)
document.write(`CPU : ${cpu} <br> USER : ${user} <br>  The Winner is ${result}`)

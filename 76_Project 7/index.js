class Password {
    constructor(){
        console.log("Welcome to the Password Generator")
        this.Pass = ""
    }
    generatePassword(length){
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let number = "1234567890"
        let special = "!@#$%^&*()"
        if(length<3){
            console.log("Your password Should be atleast 3 characters long")
        }
        else{
            let i = 0
            while(i<length){
                this.Pass += alphabet[Math.floor(Math.random() * alphabet.length)]
                this.Pass += number[Math.floor(Math.random() * number.length)]
                this.Pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            this.Pass = this.Pass.substr(0, length)
return this.Pass
        }
        
    }
}

let a = new Password()
console.log(a.generatePassword(18))
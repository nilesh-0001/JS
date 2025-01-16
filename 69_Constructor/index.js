// class form {
//     constructor(user,trainid){
//         this.name = user
//         this.trainNumber = trainid
//         console.log("Constructor Called...... "+ user + " " + trainid)
//     }
//     submit(){
//         alert( this.name + ": Form Submitted with the train number : " + this.trainNumber)
//     }
//     cancel(){
//         alert( this.name + " : Cancel Form with the train number : " + this.trainNumber)
//     }
// }

// // Create and fill Form for Nishu and Anshu 
// let Nishu = new form("Nilesh", 234120)
// let Nishu1 = new form("Nilesh", 564420)
// // Nishu.fill("Nilesh", 234120)
// // Nishu1.fill("Nilesh", 564420)
// let Anshu = new form("Anshul", 120340)
// // Anshu.fill("Anshul", 120340)

// Nishu.submit()
// Nishu1.submit()
// Anshu.submit()
// Nishu1.cancel()

// We did,t have to make a class for fill we can just use Constructor for it 

class form {
    constructor(user,trainid,houseno){
        console.log("Constructor Called...... "+ user + " with train id " + trainid+ " With House no. " + houseno)
        this.name = user
        this.trainNumber = trainid
        this.address = houseno
    }
    preview(){
        alert( this.name + ": Your Form detail is right here : " + this.trainNumber + " With an Address of " + this.address )
    }
    submit(){
        alert( this.name + ": Form Submitted with the train number : " + this.trainNumber)
    }
    cancel(){
        alert( this.name + " : Cancel Form with the train number : " + this.trainNumber)
        this.trainNumber = 0
    }
}
let Nishuform = new form("Nishu", 2332420, "2400/1 ")
let Nishu1form = new form("Nishu1", 2332421, "2401/1 ")
let Nishu2form = new form("Nishu2", 2332422, "2402/1 ")
Nishuform.preview()
Nishuform.submit()
Nishuform.cancel()
Nishuform.preview()


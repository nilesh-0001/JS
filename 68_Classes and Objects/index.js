// In this session we are gonna talk about the classes and objects 

class form {
    submit(){
        alert( this.name + ": Form Submitted with the train number : " + this.trainNumber)
    }
    cancel(){
        alert( this.name + " : Cancel Form with the train number : " + this.trainNumber)
    }
    fill(user,trainid){
        this.name = user
        this.trainNumber = trainid
    }
}

// Create a Form for Nishu and Anshu 
let Nishu = new form
let Nishu1 = new form
Nishu.fill("Nilesh", 234120)
Nishu1.fill("Nilesh", 564420)
let Anshu = new form
Anshu.fill("Anshul", 120340)

Nishu.submit()
Nishu1.submit()
Anshu.submit()
Nishu1.cancel()
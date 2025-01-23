class Employee {
    constructor(user){
        this.name = user
        console.log(`${user} Employe Details`)
    }
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    requestedleave(l){
        console.log(`Employee has requested ${l} leaves`)
    }
}
class developer extends Employee{
    constructor(user){
        super(user)
        console.log(`${user} --- Developer information are Provide here must read`)
        // this.name = user
    }
    // constructor(){
    //     super()
    // }   // if there is no constructor in the child class the javascript automatically creates it .
    coffeerequest(c){
        console.log(`Employee has requested ${c} coffees`)
    }
    // This is called Method OverRidding

    requestedleave(l){
        super.requestedleave(l+1)
        console.log("One Extra leave is given")

        // console.log(`Employee has requested ${l + 1} (OneExtra)`)
    }
}


let x  = new developer("Nishu")
x.login()
x.coffeerequest(3)
x.requestedleave(4)
// In this session we are gonna talk about the Method OverRiding.
class Employee {
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
let Nishu = new developer
Nishu.login()
Nishu.coffeerequest(4)
Nishu.requestedleave(5)
Nishu.logout()


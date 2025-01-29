class Animal {
    constructor(name){
        this._name = name
    }
    fly(){
        console.log("Mai so raha hu ")
    }
    get(name){
        return this._name
    }
    set name(Newname ){
        this._name = Newname
    }
}
class Rabbit extends Animal {
    eatcarrot(){
        console.log("Eatind Carrot")
    }
}
let x = new Rabbit("Jack")
x.fly()
console.log(x._name)
x.name = "Irus"
console.log(x._name)
console.log(x instanceof Animal)
console.log(x instanceof Rabbit)
console.log(c instanceof Animal)
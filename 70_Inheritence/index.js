// In this session we are gonna talk about the InHeritence  
class Animal {
    constructor(name,color,ability,species){
        this.Animalname = name
        this.Animalcolor = color
        this.Animalability = ability
        this.Animalspecies = species
    }
    Intro(){
        console.log("Hi my name is "+ this.Animalname + " and i am a " + this.Animalspecies)
    }
    Ability(){
        console.log( this.Animalname+" is " + this.Animalability)
    }
    Color(){
        console.log("My color is " + this.Animalcolor)
    }
}
class Monkey extends Animal{
    likefood(){
        console.log( this.Animalname + " is eating Banana")
    }
    shelter(){
        console.log(this.Animalname + " is hiding under a tree")
    }
}
let animal = new Animal("Bruno","white","searching","Dog")
let M = new Monkey("Bandru","LightBrown","climbing","Monkey")

animal.Intro()
animal.Ability()
animal.Color()
M.shelter()
M.likefood()
M.Intro()
M.Ability()
// We cannot use Monkey features or Functionality in Animal class


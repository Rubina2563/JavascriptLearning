class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name+"  is running")
    }
    shout(){
        console.log(this.name+"  is shouting")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name+"  is eating banana")
    }  
}

let ant= new Animal("BRUNO","WHITE");
let M= new Monkey("CHIMPU","BROWN");

ant.shout();
M.shout();
M.eatBanana();
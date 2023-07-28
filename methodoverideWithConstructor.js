//if there is no constructor in child class then it will take constructor of parent class automagically
class Employee{
    constructor(name){
        this.name=name;
        console.log(`${name} data is here..`);
    }
    login(){
        console.log("Employee loged in")
    }
    
    logout(){
        console.log("Employee loged out")
    }
    
    leave(x){
        console.log(`Employee has applied for ${x} leaves`)
    }
    }
    
    class Programmer extends Employee{
        constructor(name){
            super(name); //constructor in child class will work only when we add parent class constructor
            console.log('Employee data is here..');
        }
       
        coffee(x){
            console.log(`Programmer need ${x} coffee`)
        }
        leave(x){
            super.login(); //it will run previous class methods as it is 
            super.leave(x);
            console.log(`Employee has granted ${x+1} leaves with  one extra leave`)//methodoveriding
        }
    }
    let e=new Programmer("Rubina");
    e.login();
    e.leave(4);
    e.logout();
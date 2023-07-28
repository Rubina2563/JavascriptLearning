class Employee{
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
    coffee(x){
        console.log(`Programmer need ${x} coffee`)
    }
    leave(x){
        super.login(); //it will run previous class methods as it is 
        super.leave(x);
        console.log(`Employee has granted ${x+1} leaves with  one extra leave`)//methodoveriding
    }
}
let e=new Programmer();
e.login();
e.leave(4);
e.logout();
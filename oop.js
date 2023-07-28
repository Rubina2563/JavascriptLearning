//Abstraction:hiding of internal details for ex:mixer grinder does its work withoutshowing its internal parts
//Encapculation:Adding feactures in a single entity
//Inheritance:adding more feactures to the current version and making it advance
//Polymorphism:Different  forms of single element for ex:your mobile is phone , it can be voice recorder,it can be camera etc

//basic sytax of objects and prototypes

a={
    class:1,
    name:"Rubina",
    method1:()=>{
       console.log(a.class);
    },//this will give undefined when we use this instead of a 
    
    method2:function(){
        console.log(this.class);
     },
     
     run:function(){
        alert("inside a run");
    }
}
console.log(a.name);

a.method1();
a.method2();
console.log(a)


let p={
    run:function(){
        alert("run");
    },
    name1:"Aayat"
}
a.__proto__=p;

p.__proto__={
    name2:"Aejaz"
}

a.run();
p.run();

console.log(a.name1);
console.log(a.name2);
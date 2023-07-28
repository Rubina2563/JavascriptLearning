var a=4;
function hello(){
    if(true){
        var a=1;
        var a=5; //this thing is notpossible with let and const

        let b=2;
        const c=3;
        console.log(a);
        console.log(b);
        console.log(c);

    }
    console.log("Outside bracket");
    console.log(a);
    //console.log(b); //will not work as let is block scope
   //console.log(c); //will not work as const is block scope

}
/*
const items={
    item1:"Rubina",
    item2:150,
    item3:true};

hello();
console.log(items);
console.log(a); // not allow outside the bracket even its var and also its function scope so outside block will take value initalize earlier

//Practice set
//question1
 let x="Rubina + ";
 let y=4;
 z=x+y;
 console.log(z);
 console.log(typeof z);

 //question2 ->To add a new key-value pair to already created object
 items.item3=455;
 console.log(items);

 //write a program to find whether the age of  preson lies in between 10 and 20

 let age = prompt("What is your age?");
                //let Age=Number.parseInt(age);
                //let result= (age>10 && age<20)? "Lies between 10 and 20":"Not lie in between 10 and 20";

console.log((age>10 && age<20)? "Lies between 10 and 20":"Not lie in between 10 and 20");

//create a if else problem

const num = prompt("Enter a valid number");
const Num=Number.parseInt(num);

if(num>=18){
console.log("Age is valid for driving")
}else if (num<18 && num>0) {
    console.log("Age is invalid for driving")  
} else {
    console.log("Age entered is not valid") 
}
*/
//create a switch statement
const myNum=prompt("Enter a number between 1 to 5");

const my_Num=Number.parseInt(myNum);

switch(my_Num){
    case 1:
        console.log("You entered one");
        break;
        case 2:
        console.log("You entered two");
        break;
        case 2:
            console.log("You entered three");
            break;
            case 2:
        console.log("You entered four");
        break;
        case 2:
        console.log("You entered five");
        break;
        default:
            console.log("you didnot enetered an integer between 1 to 5");   
}
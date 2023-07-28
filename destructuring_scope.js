//assigning array value to variables a and b
let arr=[1,23,21];
[a,b]=arr;
console.log(a);
console.log(b);
console.log(a,b);
console.log(a,b,c); //this will cause error as c has no assigned value
//old method say
//a=arr[0] and b=arr[1]

let arr2=[1,23,21,22,24,25,26];
[A,B,C,...rest]=arr2;
console.log(A,B,C,rest);

let arr3=[1,23,21,22,24,25,26];
[A1, ,B1,...rest]=arr2;
console.log(A1,B1,rest);

// for objects
let {p,q}={p:1,q:2};
console.log(p,q);

//spread operator
let arr4=[1,2,3,45,5];
let obj1={...arr4};
console.log(obj1);


//using function with destructuring
const sum = (a,b,c)=>{
return a+b+c;
}

console.log(sum(...arr));

let obj2={
    name:'Rubina',
    place:"Jodhpur",
    numberRoll:1
}

console.log({...obj2,name:"Aejaz1"});

//scopes
//block scope
{
    var a=2
}
console.log(a);  //this will not work with let and const as they have block scope

//function scope

function A(){
    let b=6;
    console.log(b);
}

A(); //it will work
console.log(b) //this will not work


//global scope
let C=5;

function B(){
    console.log(C)
}
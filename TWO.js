const n= prompt("Enter a valid positive integer less  then 15");
const N=Number.parseInt(n);

for(let i=1;i<=N;i++){
    console.log((i));
}

//creating one object and one array

const objA={ NAME:'Rubina',ROLL :4,FEMALE:true };
const ArrB=[1,1,4,true];

console.log(objA);
console.log(ArrB);

//creating for in loop
for(KEY in objA){
    console.log(KEY);
};

for(KEY in ArrB){
    console.log(KEY);
};

for(KEY in objA){
    console.log(objA[KEY]);
};

for(KEY1 in ArrB){
    console.log(ArrB[KEY1]);
};

//creating for of loop

/*
for(value of objA){
    console.log(value);
};
for of didnot work for object */

for(value of ArrB){
    console.log(value);
};

//over astring
const iterable = "boo";

for (const value of iterable) {
  console.log(value);}

  // over map
  const iterables = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iterables) {
    console.log(entry);
  }
  // ['a', 1]
  // ['b', 2]
  // ['c', 3]
  
  for (const [key, value] of iterables) {
    console.log(value);
  }
  // 1
  // 2
  // 3
  //over set and array it give value of unique item only
  const Iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of Iterable) {
  console.log(value);
}

//while loop
let p=0
while(p<5){
    console.log(p);
    p++; 
}

//do while
let q=5
do{
    console.log(q);
    p++; 
}while(q<5)


//enxercise question
const objB={ Harry:98, Rohan:97,Rita:90};


for(let i=0;i<Object.keys(objB).length;i++){
  console.log(objB[Object.keys(objB)[i]]);
}

//write try again till you get correct answer
//let A=prompt("Enter any number between 1 to 10");

//let B=Number.parseInt(A);

const targetNumber = 42; // Change this to your desired constant value

let userInput;
let userNumber;

do {
  // Prompt the user to enter a number
  userInput = prompt("Enter a number:");

  // Parse the user input as a number
  userNumber = parseInt(userInput);

  // Check if the user input matches the constant value
  if (userNumber !== targetNumber) {
    console.log("Sorry, the number you entered does not match. Please try again.");
  }
} while (userNumber !== targetNumber);

console.log("Congratulations! You entered the correct number.");

//write function to get average of four number
function Avg(a,b,c,d){
  let e=(a+b+c+d)/4;
  console.log(e)
}

Avg(1,2,3,4)
const fruits=["apple","banana","graps"];
const num1=[1,2,10,100,21,56];
const num2=[1,2,3];
console.log(fruits);


//ascessing the arrays value
console.log(fruits[2]);


//finding array length
console.log(num1.length);


//changing array value
fruits[2]="peace";
console.log(fruits);


//type of array is object
console.log(typeof num1);

//Array methods
console.log(num1.toString());

console.log(num2.toString());

console.log(num2.join("a")); //these doesnot changes original string but give respective values only

console.log(num1.pop());  //it returns the poped value and changes original value

console.log(num1);  

console.log(num1.push(5)); //it returns the increased length after being pushed

console.log(num1); 

console.log(num1.shift()); //same as pop for begining
console.log(num1.unshift(4));//same as push

console.log(fruits.concat(num1,num1,num2)); //doesnot change original arrays but give new array

console.log(fruits.reverse()); //changes original array itself
console.log(fruits);

console.log(fruits.splice(1,2,23,24,25)); //returns items that are being deleted and changes the original array
console.log(fruits); //this is original array after being changed
fruits[4]="peace";
fruits[5]="mango";

console.log(fruits.slice(1));  //returns items from position mentioned but doesnot changes the original array
console.log(fruits);

console.log(fruits.slice(1,3));  //returns items between  position mentioned but doesnot changes the original array
console.log(fruits);

console.log(fruits.sort()); 

console.log(num1.sort(((a,b)=>a-b))); 

//forEach perform a function and give only results
num1.forEach((number)=>{
    num2.push(number*2)
})

console.log(num2);

//map() perform a function and give only new array
const num3=num2.map((number)=>{
    return number/2;  
})

console.log(num3);

//reduce function
const sum=num3.reduce((a,b)=>{
    return a+b;
})

console.log(sum);

//array.from
const Nam1="Rubina";

console.log(Array.from(Nam1));  //Use in order to make use Array methods on object which are not actually array

//Pracice set
//question1
const NewNum=[];
do {
    // Prompt the user to enter a number
    userInput = prompt("Enter a number:");
  
    // Parse the user input as a number
    userNumber = parseInt(userInput);
  
    // Check if the user input matches the constant value
    if (userNumber !== 0) {
     NewNum.push(userInput);
    }
  } while (userNumber !== 0);
  
  console.log(NewNum);

  
  //question2
  const FilNum=num1.filter((number)=>{
   return number%10===0;
  });

  console.log(FilNum);

  const num4=num2.map((number)=>{
    return number*number;  
})

console.log(num4);

const num5=[1,2,3,4,5];

const multi=num5.reduce((a,b)=>{
    return a*b;
})

console.log(multi);


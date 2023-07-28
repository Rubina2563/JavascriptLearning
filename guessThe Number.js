console.log(console); //it  give the list of all console methods
console.assert(5>5);  //check whether the statement is true or false
console.assert(5==5);
console.warn("its a warning");
console.error("its a error");
console.table(console);//give values in table form

let a=prompt("Enter a number","5555");//number 5555 is defaut value
alert("The type of number here:"+(typeof a));
let n=Number.parseInt(a);
alert("The type of number here:"+(typeof n));
let b=confirm("Do you want this number to be written?");

if(b){
  document.write(b);
}else{
  document.write('Please let me write');
}

//Exercise :Guess the random number
const RanNum=Math.floor(Math.random()*100);
let userNUM=prompt("Enter a number between 0 to 100");
let userNum=Number.parseInt(userNUM);
let score=100;
let i=1;
  //console.log(RanNum);



while(userNum!=RanNum){

    if(userNum>RanNum){
        console.log(`${userNUM} is greater then our number`)
    }else if(userNum<RanNum){
        console.log(`${userNUM} is smaller then our number`)  
    }
    userNUM=prompt("Enter a number again");
    userNum=Number.parseInt(userNUM);
    
    if(userNum==RanNum){
      score=score-i;
      console.log(`Number is correct with score:${score}`)  
    }
    i++;
}
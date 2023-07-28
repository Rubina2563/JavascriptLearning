

function myGame(){let computer=Math.floor(Math.random()*2);

let Word;

function NewWord(){
    if(computer==0){
    Word='S';
    return Word;
}else if(computer==1){
    Word='W';
    return Word;
}else{
    Word='G';
    return Word;
}
}

NewWord();


let userWord=prompt("please enter S or W or G for snake, water and gun ");



    console.log(`User:${userWord} and System:${Word}`);
    let Answer;
    if(userWord==Word){
        Answer=console.log("Both have same values");
        return Answer;
    }else if(userWord=='S'&& Word=='G'){
        Answer=console.log("You loss");
        return Answer;
    }else if(userWord=='G'&& Word=='S'){
        Answer=console.log("You win");
        return Answer;
    }else if(userWord=='G'&& Word=='W'){
        Answer=console.log("You loss");
        return Answer;
    }else if(userWord=='W'&& Word=='G'){
        Answer=console.log("You win");
        return Answer;
    }else if(userWord=='S'&& Word=='G'){
        Answer=console.log("You loss");
        return Answer;
    }else if(userWord=='G'&& Word=='S'){
        Answer=console.log("You win");
        return Answer;
    }
    else if(userWord=='S'&& Word=='W'){
        Answer=console.log("You win");
        return Answer;
    }else if(userWord=='W'&& Word=='S'){
        Answer=console.log("You loss");
        return Answer;
    }
    else{
        Answer=alert("you have not given a  valid input with capital S or W or G");
        return Answer;
    }
          
}

myGame();


let confirmation=confirm('Do you want to play again?');

while(confirmation==true){
    myGame();
    confirmation=confirm('Do you want to play again?');

}

console.log('Thanks for playing');
 

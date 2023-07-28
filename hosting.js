//tis will work even if function iscalled before declared
greet()
GREET()

function greet(){
    console.log("good morning")}

    //var are declare to tthe top but not initialize
    //means errorwill not occur but it will show undefined

    console.log(a);
    var a=8;

    //in case of let following two line will give  undefined
    let b;
    console.log(b);

    //Cannot access 'c' before initialization(but same for var will give undefined)
    console.log(c);
    let c;

    //Cannot access 'GREET' before initialization (but it was working with function greet)
    //function expression and class expression are not hoisted
    //same with var will give error :GREET is not a function
    const GREET=()=>{
        console.log("GOOD MORNING")
    }

    //see meaning of class expression from mdn basically it sclass
    


    
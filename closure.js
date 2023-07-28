let meesage = "good morning";
msg();
function msg(){
    console.log(meesage)
}
//output:good morning

let Meesage = "Good morning";
Msg();
function Msg(){
    let Meesage = "Good Evening";
    console.log(Meesage)
}
//output:Good Evening

MSg();
function MSg(){
    let MSesage = "Good Evening";
    {
        let MSesage = "Evening";
        console.log(MSesage)
    }
    console.log(MSesage)
}
/*Output:
Evening
closure.js:23 Good Evening*/

/*A closure is the combination of a function bundled together 
(enclosed) with references to its surrounding state (the lexical environment).
 In other words, a closure gives you access to an outer function's scope from an inner function. 
 In JavaScript, closures are created every time a function is created, at function creation time.*/
console.log("closure")
 
MSG();
function MSG(){
    let MSesage = "Good Evening";
   {
        let MSesage = "Evening";
        console.log(MSesage+"hello")
        console.log("me")
    }
    function c(){
        console.log(MSesage)
    }
return c;
}

/*let a= MSG();
a();*/

/*closure
Eveninghello
me
Eveninghello
me
Good Evening
*/
//
function init() {
    var name = "Mozilla"; 
    function displayName() {
      
      console.log(name); 
    }
   
    displayName();
    
    var name="harry";
    return displayName;
  }
  let p=init();
  p();

  //output:Harry

  //following lines works
  var x=1;
  x=2;
  console.log(x)


  function returnFunction(){
    const x=()=>{
        let a=1;
        console.log(a)
        const y=()=>{
            let a=2;
            console.log(a)
            const z=()=>{
                let a=3;
            console.log(a)
            }  
            z()
        }
        y()
    }
    return x
  }

  let a=returnFunction();
  a();

console.log("closure")
  function rIeturnFunction(){
    const x=()=>{
        let a=1;
        console.log(a)
        const y=()=>{
            let a=2;
            console.log(a)
            const z=()=>{
               // let a=3;
            console.log(a)
            } 
            z() //output will be 1 2 2 but if a=100 was declared just before z() then output would have been 1 2 100
            //a=100;
            
        }
        
        y()
    }
    return x
  }

  let l=rIeturnFunction();
  l();
 

 
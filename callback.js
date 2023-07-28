//what is syncnorous programming? Ans:function running in sequence.
let a=prompt("what is your age?");
let b=prompt("what is your name?");
let c=prompt("what is your fav color?");
console.log("your name is "+b+" your age is "+a+" and your fav color is "+c);

//waht is asyncnorous programming? Ans; that has nothing to do with sequence but run on time given
console.log('First:I am in simple console');
setTimeout(()=>{console.log('Second:I am in simple console');},3000)
console.log('Third:I am in simple console');


//syntax of callback func

function myCalculator(num1, num2, callback = () => {}) {
  let sum = num1 + num2;
  callback(sum);
  return sum;
}
function myDisplayer(something) {
    console.log(something);
  }

myCalculator(5, 5,myDisplayer);
myCalculator(5, 5);

//below is  example to show calling a function before doesn't matter ,it is the timeout that matters
function myFirst(){
    setTimeout(()=>{console.log("5 sec")},20000);
}
myFirst();
setTimeout(()=>{console.log("2 sec")},10000);

//callback funct for error handling

function loadScript(src,callback){
var script=document.createElement("script");
script.src=src;
script.onload=()=>{
    console.log('Loaded script with src'+src);
    callback(src);
}
document.body.appendChild(script);
}

function hello(src){
    alert("Hello!!"+src);
}

function goodMorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Good morning!!"+src);
}

loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js",hello)//min this case a error occured because you put <script>tag initially in head

//callback with error
function loaDScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=()=>{
        console.log('Loaded script with src'+src);
        callback(null,src);
    }
    script.onerror=()=>{
        console.log('Error script with src'+src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
    }

    loaDScript("https://code.jquery.com/jquery-3.4.1.slim.minD.js",goodMorning)

    //explaining what is pyramid of DOM
    loaDScript("https://code.jquery.com/jquery-3.4.1.slim.minD1.js",function gdMorning(error,src){
        if(error){
            console.log(error)
            return
        }
        loaDScript("https://code.jquery.com/jquery-3.4.1.slim.minD1.js",function gdMorning(error,src){
            if(error){
                console.log(error)
                return
            }loaDScript("https://code.jquery.com/jquery-3.4.1.slim.minD1.js",function gdMorning(error,src){
                if(error){
                    console.log(error)
                    return
                }})
                loaDScript("https://code.jquery.com/jquery-3.4.1.slim.minD1.js",function gdMorning(error,src){
                    if(error){
                        console.log(error)
                        return
                    }})})   
    }
    )
    
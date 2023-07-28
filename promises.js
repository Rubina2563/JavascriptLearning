//basic syntax of promiselet 
myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    console.log('Hello promise');
      myResolve(50); // when successful
    myReject();})
     // when error
   

    //checking promise state
    console.log(myPromise);

    //note:promises without try catch doesnot handle error issue they throw error like any other function

    //another example 
    let p=new Promise((resolve,reject)=>{
      console.log("I am pending");
      setTimeout(()=>{
      console.log("Iam a promise and I am fulfilled after 5 sec");
      resolve(true);
      },5000)
    })

    //console.log(p);  //it give the stateof promise whether its fulfilled or not

  let p1=new Promise((resolve,reject)=>{
        console.log("I am pending");
        setTimeout(()=>{
        console.log("Iam a promise and I am rejected");
        reject(new Error('I am rejected'));
        },7000)
      })
  
      console.log(p1,p); 

//this will directly transfer promise result value 
      p.then((value)=>{
      console.log(value);
      })      

      //errors can be handled in two ways
      //directly with catch and also with then
      p1.catch((error)=>{
        console.log("error handled")
      })

      p1.then((value)=>{
        console.log("value handled")
      },(error)=>{
        console.log("error handled") 
      })

     //handling pyramid of hell problem with .then
     p.then((value)=>{
        console.log(value);
        console.log("Done first then");
        let p2=new Promise((resolve,reject)=>{
            console.log("I am pending");
            setTimeout(()=>{
            console.log("Iam a promise and I am fulfilled after 8 sec");
            reject(new Error('I am rejected'));
            },8000)
          })
      return p2;
      }).then((value)=>{
        console.log("value handled");
        return 2
      },(error)=>{
        console.log("error handled") ;
        return 2
      }).then((value)=>{
        console.log(value);
        console.log("Done third then");
        return 3;
      })
      //this is the perfect way to handle errors , otherwise code will stop consoling

      //example of promise for loading script
     const loadScript=(src)=>{
        return new Promise((resolve,reject)=>{
            let script=document.createElement("script");
            script.src=src;
            document.body.appendChild(script);
            script.onload=()=>{
                resolve(1);
            }
            script.onerror=()=>{
                reject(0);
            }
        })
      }


      let p4=loadScript("https://ccode.jquery.com/jquery-3.4.1.slim.min.js");
      
      p4.then((value)=>{
        console.log(value);
      }).catch((error)=>{
        console.log("Error while loading file");
      })

      //attaching multiple handler in two ways
      //attaching in same line like
      const Pro= new Promise((resolve,reject)=>{
setTimeout(() => {
    console.log("After 3 sec")
}, 3000);
resolve(1)
      }) 

      Pro.then((value)=>{
        console.log('FIRST then');
        console.log(value);
        resolve(2)
      }).then((value)=>{
        console.log('SECOND then');
        console.log(value);
        resolve(3)
      }).then((value)=>{
        console.log('THIRD then');
        console.log(value);
        resolve(4)
      })

      //attaching in different line
      Pro.then((value)=>{
        console.log('First then');
        console.log(value);
        resolve(2);
      })

      Pro.then((value)=>{
        console.log('Second then');
        console.log(value);
        resolve(2);
      })

      Pro.then((value)=>{
        console.log('Third then');
        console.log(value);
        resolve(2);
      })
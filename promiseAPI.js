const P1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("After 3 sec")
        resolve("Value1")
    }, 10000);
    
          }) 

          const P2= new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("After 3 sec");
                resolve("Value2")
            }, 2000)
    
                  }) 

                  const P3= new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        console.log("After 3 sec");
                        resolve("Value3")
                    }, 3000)
                   
                          }) 
 
// promise.all which gives end result after all promises are resolved
const pro_all=Promise.all([P1,P2,P3]);

pro_all.then((value)=>{
    console.log(value);
})

//lPromise.allSettle which handle any reject if any occur
const pro_all_settled=Promise.allSettled([P1,P2,P3]);

pro_all_settled.then((value)=>{
    console.log(value);
})

//Promise.race which give the value of first fulfilled or rejected promise 
const pro_race=Promise.race([P1,P2,P3]);

pro_race.then((value)=>{
    console.log(value);
})

//promise.any give only first fulfilled promise leaving all rejected promise
const pro_any=Promise.any([P1,P2,P3]);

pro_any.then((value)=>{
    console.log(value);
})
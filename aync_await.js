async function weather(){
const delhiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 deg")
    },5000)
})
const mumbaiWeather=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("30 deg")
    },10000)
})
//delhiWeather.then(alert);
//mumbaiWeather.then(alert);


console.log('Fetching mumbaiweather pls wait');
const mumbaiW=await mumbaiWeather;
console.log('mumbaiweather has been fetched');


console.log('Fetching delhiweather pls wait');
const delhiW=await delhiWeather;
console.log('delhiweather has been fetched');

return[delhiW,mumbaiW]
}

console.log('Weather information1');
weather().then((value=>{
    console.log(value)
}))

//note:mainly this function doesnot stop promise to process but it just stops the upcoming promises result
//we can say ,even if a promise is done in 2 sec but if its waiting after 10 sec promise 
//then it will stop from displaying its result and let 10 sec promise first display 
//as soon as 10 sec promise is done ,it will display 2 sec along with it

 

const harry=async ()=>{
  console.log("hey I am harry ");   
   return 2;
}

const main1= async ()=>{
    console.log('Weather information2');
let a = await harry();
let b = await weather();
console.log(a); 

}

main1();

//try_catch video

//error_,objects and custom error

try{
    harry
}catch(error){
    console.log(error.name);
    console.log(error.message);
}
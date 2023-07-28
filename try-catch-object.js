try{
    harry
}catch(error){
  
    console.log("harry is not working");
}

try{
    throw Error('I am not working')
}catch(error){
    console.log(error.name);
    console.log(error.message);
}

try{
   let age= prompt("nEnter your age")

    if(age>150){throw Error('not possible')}

    console.log('I am working');
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//try_catch_finally syntax

try{
    let a=0;
    console.log("Program runs successfully")
}catch(error){
console.log("Program has an error:"+error);
}finally{
    console.log("Programs ends here")
}

//why we use finally
try{
    let a=0;
    console.log(harry)
    console.log("Program runs successfully")
}catch(error){
console.log("Program has an error:"+error);
console.log(harry)
}finally{
    console.log("Programs ends here secondtime")
}


console.log("Programs ends second time here") //this doesnot means that whole code will work ,only finally will work
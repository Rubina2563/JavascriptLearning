

let p=fetch(" https://api.oceandrivers.com/static/resources.json");
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.header);
    return response.json();
   
}).then((response)=>{console.log(response)})


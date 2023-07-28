const todocreate=async (todor)=>{
    let p= await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

let response=await p.json();
return response;
}



const  createMain=async ()=>{
    let todor={
        title:'Harry',
body:'bhai',
userId:1100,
    }
    let todo=await todocreate(todor);
    console.log(todor);
    console.log(await getTodo(1100))
 }


 const getTodo=async (id)=>{
   let p = await  fetch('https://jsonplaceholder.typicode.com/posts/'+id);
  let r= await p.json();
  return r;
 }

 createMain();
 getTodo(56);
let url="https://kontests.net/api/v1/all";
let response=fetch(url);
response.then((v)=>{
    return v.json()
}).then((contest)=>{
    console.log(contest);
    let itml="";
   for(item in contest){
    
  itml+=`<div class="card" style="width: 18rem;">
   <img src="https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${contest[item].name}</h5>
     <p class="card-text">Starting time:${contest[item].start_time}</p>
     <p class="card-text">End time:${contest[item].end_time}</p>
     <p class="card-text">Duration:${contest[item].duration}</p>
     <a href="${contest[item].url}" class="btn btn-primary">Link here</a>
   </div>
 </div>`
   }
   CardContainer.innerHTML=itml;
})
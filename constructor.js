
//constructor without paraameter are called every time when a new class is created
class railForm{
    constructor(){
        console.log("One form called....")
    }
    sunbmit=()=>{
      
    alert(this.name+":your form has beenn submit")
   } ; //unlike objects this.name run here but you can not useconst ,let ,var here in classes

   cancel(){
    alert(this.name+":your train "+this.trainno+" has beenn cancel")
   } 
   formfill(name,trinNo){
this.name=name;
this.trainno=trinNo;
   }
}

let RubinaTrain=new railForm(); //otuput:One form called....

class railForm2{
    constructor(name,trinNo){
        this.name=name;
        this.trainno=trinNo;
           
        console.log("One form called...."+"CUSTOMER NAME: "+this.name+"TRAIN NO.: "+this.trainno)
    }
    sunbmit=()=>{
      if(this.trainno==0){
        alert('You have  canceled your train ,pls book again if required')
      }else{
    alert(this.name+":your form has beenn submit with train No."+this.trainno)
   }} ; //unlike objects this.name run here but you can not useconst ,let ,var here in classes

   cancel(){
    alert(this.name+":your train "+this.trainno+" has beenn cancel")
    this.trainno=0;
   } 
  
}
let RubinaTrain2=new railForm2("RUBINA ",12345);
let Aejaz2=new railForm2("AEJAZ",223344);
Aejaz2.sunbmit();  //value willremain undefined or cause an error in strict mode
RubinaTrain2.cancel();
RubinaTrain2.sunbmit();
Aejaz2.sunbmit();

//argument of constructor can be element of array

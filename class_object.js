//basic sytax of classes
class railForm{
    sunbmit=()=>{
    alert(this.name+":your form has beenn submit")
   } ; //unlike objects this.name run here but you can not use const ,let ,var here in classes

   cancel(){
    alert(this.name+":your train "+this.trainno+" has beenn cancel")
   } 
   formfill(name,trinNo){
this.name=name;
this.trainno=trinNo;
   }
}

//create a form for Rubina train
let RubinaTrain=new railForm();
//filling form 
RubinaTrain.formfill("RAubina",1234);
//submitting form
RubinaTrain.sunbmit();


//create a form for Aejaz train
let AejazTrain=new railForm();
//filling form 
AejazTrain.formfill("Aejaz",1234);
//submitting form
AejazTrain.sunbmit();

//create a form for Aejaz train
let AejazTrain1=new railForm();
//filling form 
AejazTrain1.formfill("Aejaz",5678);
//submitting form
AejazTrain1.sunbmit();
//cancelling AejazTrain1
AejazTrain1.cancel()

let AejazTrain2=new railForm();

//submitting form
AejazTrain1.sunbmit();
//cancelling AejazTrain1

//important is arrow function behaves different for both classes and objects
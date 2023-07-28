class password{
    constructor(){
      let a=prompt("Enter number of characters to erate password");
        this.len=a;
        this.password="";
        this.pass="";
    }
    generator(length){
length=this.len;
let chara="abcdefghigk";
let num="1234567890";
let spec_char="@#$!%^&*()"
if(length<4){
    console.log("atleast 4 characters are required")
}else{
    let i=0;
   // let pass="";
    while(i<length){
        this.pass+=chara[Math.floor(Math.random()*chara.length)];
        this.pass+=num[Math.floor(Math.random()*num.length)];
        this.pass+=spec_char[Math.floor(Math.random()*spec_char.length)];
i+=3
    }
    this.password=this.pass.substr(0,this.len);
    console.log(this.password);
    document.getElementById("joke").innerHTML=this.password;
}
    }
}

let mypass=new password();
mypass.generator();
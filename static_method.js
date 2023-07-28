class animal{
    

    constructor(name) {
        this._name=animal.Capitalize(name);
        console.log(this.name+` is animal class`)
    }

    walk(){
        console.log(this.name+` is walking`)
    }

    static Capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length);
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name=animal.Capitalize(name);
    }
    }

    let j=new animal(animal.Capitalize("jack"));//no need to use at two places ,it will work for one place also
let p=new animal("pinku")
console.log(p.name);
p.name="sunnny";
console.log(p.name);
let c=45;
console.log(p instanceof animal)
console.log(c instanceof animal)
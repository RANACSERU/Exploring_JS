class Parent{
    constructor(){
        this.fatherName = "Rashid";
    }
}



class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}


const baby = new Child("Ripon");

console.log(baby)
console.log
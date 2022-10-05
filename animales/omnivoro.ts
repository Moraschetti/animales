import { Mamifero } from "./animales";

class Omnivoro extends Mamifero{
    constructor(animal:string,vertebrado:boolean){
        super(animal,vertebrado);
       }
       nombrar():void{
        this.nombre = "Pigger";
    }
    años():void{
        this.edad = 4;
    }
       comer():void{
        this.comida = "carnes y plantas";  
       } 
    }
let animal1 = new Omnivoro("cerdo",true);    

animal1.comer();
animal1.nombrar();
animal1.años();
console.log(animal1);
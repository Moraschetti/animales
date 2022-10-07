import { Mamifero } from "./animales";

class Carnivoro extends Mamifero{
    constructor(animal:string,vertebrado:boolean){
     super(animal,vertebrado);
    } 
    nombrar():void{
     this.nombre = "Billy"; 
    }
    años():void{
     this.edad = 13;
    }
    comer():void{
     this.comida = "carnes";  
    } 
 } 

let animal2 = new Carnivoro("leon",true);

animal2.comer();
animal2.nombrar();
animal2.años();
console.log(animal2);

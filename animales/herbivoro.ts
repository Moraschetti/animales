import { Mamifero } from "./animales";

class Herbivoro extends Mamifero{
    constructor(animal:string,vertebrado:boolean){
        super(animal,vertebrado);
       } 
       nombrar():void{
        this.nombre = "Ralph";
    }
    años():void{
        this.edad = 34;
    }
       comer():void{
        this.comida = "plantas";  
       } 
}
let animal3 = new Herbivoro("jirafa",true);

animal3.comer();
animal3.nombrar();
animal3.años();
console.log(animal3);
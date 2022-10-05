//import { Carnivoro } from "./carnivoro";

export class Mamifero{
    protected nombre : string;
    protected edad : number;
    protected comida : string;
    protected animal : string;
    protected vertebrado : boolean;

    constructor(animal:string,vertebrado:boolean){
        this.nombre = "";
        this.edad = 0;
        this.comida = "";
        this.animal = animal;
        this.vertebrado = vertebrado;
    }
    nombrar():void{
        this.nombre = "";
    }
    años():void{
        this.edad = 0;
    }
    comer():void{
        this.comida = "";  
       } 
    getAnimales():string{
        return this.animal;  
       } 
    setAnimales(animal:string):void{
        this.animal = animal;
       }
    animalVertebrado():void{
        if(this.vertebrado===true){
            this.vertebrado=false;
            console.log("vertebrado");
        }else{
            this.vertebrado=true;
            console.log("invertebrado");
        }  
    }    
}
//export class Carnivoro extends Mamifero{
//   constructor(animal:string,vertebrado:boolean){
//    super(animal,vertebrado);
//   } 
//   nombrar():void{
//    this.nombre = "Billy";
//}
//años():void{
//    this.edad = 13;
//}
//   comer():void{
//    this.comida = "carnes";  
//   } 
//} 
//class Herbivoro extends Mamifero{
//    constructor(animal:string,vertebrado:boolean){
//        super(animal,vertebrado);
//       } 
//       nombrar():void{
//        this.nombre = "Ralph";
//    }
//    años():void{
//        this.edad = 34;
//    }
//       comer():void{
//        this.comida = "plantas";  
//       } 
//}
//class Omnivoro extends Mamifero{
//    constructor(animal:string,vertebrado:boolean){
//        super(animal,vertebrado);
//       }
//       nombrar():void{
//        this.nombre = "Pigger";
//    }
//    años():void{
//        this.edad = 4;
//    }
//       comer():void{
//        this.comida = "carnes y plantas";  
//       } 
//    }

//let animal1 = new Omnivoro("cerdo",true);
//let animal2 = new Carnivoro("leon",true);
//let animal3 = new Herbivoro("jirafa",true);
//let mamifero : Mamifero[] = [animal1,animal2,animal3];

//animal1.comer();
//animal1.nombrar();
//animal1.años();
//console.log(animal1);

//animal2.comer();
//animal2.nombrar();
//animal2.años();
//console.log(animal2);

//animal3.comer();
//animal3.nombrar();
//animal3.años();
//console.log(animal3);

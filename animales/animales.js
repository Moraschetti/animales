"use strict";
//import { Carnivoro } from "./carnivoro";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(animal, vertebrado) {
        this.nombre = "";
        this.edad = 0;
        this.comida = "";
        this.animal = animal;
        this.vertebrado = vertebrado;
    }
    Mamifero.prototype.nombrar = function () {
        this.nombre = "";
    };
    Mamifero.prototype.años = function () {
        this.edad = 0;
    };
    Mamifero.prototype.comer = function () {
        this.comida = "";
    };
    Mamifero.prototype.getAnimales = function () {
        return this.animal;
    };
    Mamifero.prototype.setAnimales = function (animal) {
        this.animal = animal;
    };
    Mamifero.prototype.animalVertebrado = function () {
        if (this.vertebrado === true) {
            this.vertebrado = false;
            console.log("vertebrado");
        }
        else {
            this.vertebrado = true;
            console.log("invertebrado");
        }
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
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

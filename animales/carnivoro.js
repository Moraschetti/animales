"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var animales_1 = require("./animales");
var Carnivoro = /** @class */ (function (_super) {
    __extends(Carnivoro, _super);
    function Carnivoro(animal, vertebrado) {
        return _super.call(this, animal, vertebrado) || this;
    }
    Carnivoro.prototype.nombrar = function () {
        this.nombre = "Billy";
    };
    Carnivoro.prototype.años = function () {
        this.edad = 13;
    };
    Carnivoro.prototype.comer = function () {
        this.comida = "carnes";
    };
    return Carnivoro;
}(animales_1.Mamifero));
var animal2 = new Carnivoro("leon", true);
animal2.comer();
animal2.nombrar();
animal2.años();
console.log(animal2);

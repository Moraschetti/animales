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
var Omnivoro = /** @class */ (function (_super) {
    __extends(Omnivoro, _super);
    function Omnivoro(animal, vertebrado) {
        return _super.call(this, animal, vertebrado) || this;
    }
    Omnivoro.prototype.nombrar = function () {
        this.nombre = "Pigger";
    };
    Omnivoro.prototype.años = function () {
        this.edad = 4;
    };
    Omnivoro.prototype.comer = function () {
        this.comida = "carnes y plantas";
    };
    return Omnivoro;
}(animales_1.Mamifero));
var animal1 = new Omnivoro("cerdo", true);
animal1.comer();
animal1.nombrar();
animal1.años();
console.log(animal1);

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
var Herbivoro = /** @class */ (function (_super) {
    __extends(Herbivoro, _super);
    function Herbivoro(animal, vertebrado) {
        return _super.call(this, animal, vertebrado) || this;
    }
    Herbivoro.prototype.nombrar = function () {
        this.nombre = "Ralph";
    };
    Herbivoro.prototype.años = function () {
        this.edad = 34;
    };
    Herbivoro.prototype.comer = function () {
        this.comida = "plantas";
    };
    return Herbivoro;
}(animales_1.Mamifero));
var animal3 = new Herbivoro("jirafa", true);
animal3.comer();
animal3.nombrar();
animal3.años();
console.log(animal3);

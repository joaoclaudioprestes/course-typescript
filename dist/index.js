"use strict";
// Tipos Básicos
let age = 19;
const firstName = "João C. Prestes";
const isValid = true;
let idk = 5; // Podemos alterar seu valor... Buscar nunca usar!
idk = 5;
idk = "5";
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Para definir o array colocar "tipo[]"
const booleans = [true, false, false, true, false];
const names = ["joão", "felipe", "diogo"];
//Tuplas
const person = [19, "joão"];
const peoples = [
    [19, "João"],
    [29, "Felipe"],
];
// Intersections
const productId = false; // Podemos definir um tipo ou outro...
// Enum - um valor que sempre sera referenciado em outro valor...
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Dow"] = 2] = "Dow";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions - Alterar o tipo de uma variável
const productName = "Bone";
// let itemId = productName as string;
let itemId = productName; // usar como normalmente...

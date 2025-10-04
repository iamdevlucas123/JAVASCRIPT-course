"use strict";
// Compilando para JavaScript (cria um arquivo na mesma pasta)
// -> tsc index.ts
Object.defineProperty(exports, "__esModule", { value: true });
//tipos básicos
let age = 18;
const firstName = 'Lucas';
const isValid = true;
//Aceita qualquer tipo (pouco usual pois tira o sentido do typeScript)
let idk = 25;
idk = 'Rafael';
idk = true;
//Para definir os arrays precisamos definir seu tipo também
const lista = [1, 2, 5, 7, 2];
const isValidLis = [true, false, false, true];
const names = ['Lucas', 'Matheus'];
//Tupla (Ja definimos o tipo de cada elemento)
const person = [10, 'Rodrigo'];
//Lista de Tuplas
const people = [
    [1, 'Jane'],
    [2, 'Rodrigo'],
    [3, 'Patrick']
];
//Intersection, podemos definir mais que um tipo e não vai dar erro
const productId = 10;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["left"] = "Esquerda";
})(Direction || (Direction = {}));
const direc = Direction.Up; // 1
// Type Assertions (Podemos mudar o tipo com o 'as' ou com <>)
const nameProduct = 'Boné';
let itemId = nameProduct; //itemId vira uma string
let itensId = nameProduct; //itensId vira uma string

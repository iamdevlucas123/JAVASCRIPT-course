// main.js
//Modularização serve para organizar o projeto;
//Deixando cada função em uma pasta diferente.

import multiplicar, { somar, subtrair } from './mathUtils.js';

console.log(somar(5, 3));       // 8
console.log(subtrair(10, 4));   // 6
console.log(multiplicar(2, 3)); // 6


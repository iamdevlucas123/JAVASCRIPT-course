// Compilando para JavaScript (cria um arquivo na mesma pasta)
// -> tsc index.ts

//tipos básicos
let age: number = 18
const firstName: string = 'Lucas'
const isValid: boolean = true

//Aceita qualquer tipo (pouco usual pois tira o sentido do typeScript)
let idk: any = 25
idk = 'Rafael'
idk = true  

//Para definir os arrays precisamos definir seu tipo também
const lista: number[] = [1, 2, 5, 7, 2]
const isValidLis: boolean[] = [true, false, false, true]
const names: string[] = ['Lucas', 'Matheus']

//Tupla (Ja definimos o tipo de cada elemento)
const person: [number, string] = [10, 'Rodrigo']

//Lista de Tuplas
const people: [number, string][] = [
    [1, 'Jane'],
    [2, 'Rodrigo'],
    [3, 'Patrick']
]

//Intersection, podemos definir mais que um tipo e não vai dar erro
const productId: string | number = 10

enum Direction {
    Up = 1,
    Down = 2,
    left = 'Esquerda'
}

const direc = Direction.Up // 1

// Type Assertions (Podemos mudar o tipo com o 'as' ou com <>)

const nameProduct: any = 'Boné';

let itemId = nameProduct as string //itemId vira uma string
let itensId = <string>nameProduct //itensId vira uma string





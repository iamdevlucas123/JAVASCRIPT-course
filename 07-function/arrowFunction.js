//Como o javascript é uma linguagem funcional consigo definir uma variavel como um função:

let v = function(n){
    return n*2
}

console.log(v(3)) //estou referenciando uma variavel e seu parâmetro

/*
Uma forma mais curta de usar Funções é usando a Arrow Function:
- Não precisa da palavra-chave function
- Usa => após os parâmetros.
- Pode ser atribuída a uma constante ou variável.
*/

const somar = (a, b) => {
  return a + b;
};
console.log(somar(2, 3)); // 5

//Se a função tem apenas uma expressão, você pode omitir {} e return:

const dobrar = x => x * 2;
console.log(dobrar(5)); // 10

//Arrow functions são muito usadas em métodos de arrays (map, filter, reduce):

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8]


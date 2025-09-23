/*
- Em JavaScript quase tudo é considerado um objeto inclusive funções, arrays e até mesmo o window.
- Objetos são formas de armazenar dados e funcionalidades no mesmo lugar.
- São definidos com key e value e são definidas entre colchetes

*/

let cliente = {
    nome: "João",
    idade: 30,
    cidade: "Florianópolis"
};

// Logo quando referenciamos uma propriedade, estamos referênciando um key como por exemplo:
console.log(pessoa.nome) //João
console.log(pessoa.idade) //30

//É possivel adicionar e modificar propriedades:

const pessoa = {
    nome: "Gabriel",
    idade: "28"
}
//adicionando uma nova propriedade:
pessoa.profissao = "Programador";

//Alterando um valor existente:
pessoa.idade = 30
console.log(pessoa)



//Criando objetos dinâmicamente:

const carro = new Object();
carro.marca = "Ford";
carro.modelo = "Fiesta";

console.log(carro);
// { marca: 'Ford', modelo: 'Fiesta' }

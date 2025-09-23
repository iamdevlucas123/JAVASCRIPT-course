/*
    - Classe é uma forma organizada de criar objetos com propriedades e métodos de forma padronizada.
    - Classes são ideais quando você precisa criar vários objetos que compartilham as mesmas propriedades e comportamentos.
    -Ou seja ele funciona como um molde que define:
        - Quais dados o objeto terá (propriedades/atributos)
        - Quais ações o objeto poderá realizar (métodos)
*/

class pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        console.log(`olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const usuario = new pessoa("Ana", 28)
usuario.apresentar()

/*
    - Partes principais de uma classe
    - Construtor:
    - É o metodo especial que roda automaticamente assim que é criado um objeto com 'new'
    - Cada classe só pode ter um constructor.
    - Se você não criar um, o JavaScript cria um vazio automaticamente.
 */

const pessoa = {
  nome: "Ana",
  falar() {
    console.log(this.nome);
  }
};

pessoa.falar(); // "Ana" → `this` é o objeto pessoa


/*
    - Métodos:
    - São funções dentro de uma classe que definem comportamentos
*/

class conta {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor
    }

    verSaldo(){
        console.log(`Saldo de ${} ${this.}`)
    }
}

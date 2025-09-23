//Classes são ideais quando você precisa criar vários objetos que compartilham as mesmas propriedades e comportamentos.

const pessoa = {
  nome: "Ana",
  falar() {
    console.log(this.nome); //Mesma coisa que estar escrevendo pessoa.nome
  }
};

pessoa.falar(); // "Ana" → `this` é o objeto pessoa

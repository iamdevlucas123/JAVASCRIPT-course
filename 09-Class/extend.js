// Uma classe pode herdar propriedades e métodos de outra usando extends.

//extends → diz que Cachorro herda de Animal.

//super() → chama o construtor da classe pai, obrigatório antes de usar this na classe filha

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} fez um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o constructor da classe pai
    this.raca = raca;
  }

  fazerSom() {
    console.log(`${this.nome} latiu: Au au!`);
  }
}

const rex = new Cachorro("Rex", "Vira-lata");
rex.fazerSom(); // Rex latiu: Au au!

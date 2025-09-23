// Adicionando funções dentro de um objeto
//Observe que o atributo virou a chamada da função

let cliente = {
    nome: "Diogo",
    idade: "19",
    ligar: function(){
        console.log(`Ligando para ${cliente.nome}`)
    }
}

cliente.ligar() //Ligando para diogo

//Também podemos usar um jeito mais moderno

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  ligar() {
    console.log("Carro ligado!");
  }
};

carro.ligar()
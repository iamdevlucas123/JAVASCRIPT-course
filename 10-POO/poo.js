/*
    - POO é uma forma de organizar o código
    - Considerando que objetos representam entidades do mundo real
    - A idéia é tornar o código modular, reutilizavel e facil de manter
    - Um objeto é uma entidade que combina dados e comportamentos
    - Uma classe é um molde ou planta para criar varios objetos com carácteristicas semelhantes.
    - Orientação a objeto se baseia em 4 pilares:
*/

//ENCAPSULAMENTO:
// Esconder detalhes internos e controlar o acesso aos dados do objeto. Isso protege o estado internos de alterações indevidas.
//Em JavaScript usamos a '#' para criar campos privados:

class ContaBancaria {
    #saldo = 0;


    depositar (valor) {
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado`)
        }
    }
    
    verSaldo(){
        console.log(`Saldo atual: R$${this.#saldo}`)
    }
}

const conta = new ContaBancaria()
conta.depositar(150)
conta.verSaldo() // Saldo atual: R$150
// conta.#saldo = 1000;  Erro: não pode acessar diretamente


//HERANÇA
//Permite criar novas classes baseadas em outras, reaproveitando código:

class Animal {
    falar() {
        console.log("O animal faz um som")
    }
    sentar() {
        console.log("Sentado..")
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late: AU AU!!")
    }
}

const spike = new Cachorro()
spike.sentar() //Sentado..
spike.falar() //O cachorro late: AU AU!!

/*
- POLIMORFISMO

- Objetos de classes diferentes podem ser usados de forma uniforme se seguirem a mesma interface.

- No exemplo acima, tanto Animal quanto Cachorro têm um método falar().Isso permite que você chame falar() sem se importar com qual classe exata está por trás.

- ligar() pode ligar um carro ou uma moto
*/


/*
 - ABSTRAÇÃO

 - É simplificar a complexidade, mostrando apenas o que é essencial e escondendo os detalhes de implementação.

 - Por exemplo, ao usar um método depositar(), você não precisa saber como o banco calcula taxas internas, só precisa saber que ele aumenta seu saldo.
*/
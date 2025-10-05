
/*
Um Generic é um tipo parametrizado — ou seja, um tipo que recebe outro tipo como parâmetro. Em vez de você fixar o tipo (como string ou number), você diz:
    - “Esse tipo vai ser decidido depois, quando alguém usar essa função/classe/interface.”
*/

//Exemplo simples sem Generics:
function identidade(valor: string): string {
  return valor;
}

identidade("Lucas"); // ✅ ok

//O problema é que quando queremos inferir outro tipo temos que mudar na função
// COM GENERICS:

function numero <T>(valor: T): T {
  return valor;
}

//Agora o parâmetro T pode ser qualquer coisa:

numero<number>(25)
numero<string>('25')
numero<string>('Vinte e cinco')


//Usando generics com arrays:

function primeiroElemento<T>(lista: T[]): T {
  return lista[0]!;
}

const numeros = [10, 20, 30];
const nomes = ["Lucas", "Ana", "João"];

const n = primeiroElemento(numeros); // T = number
const nome = primeiroElemento(nomes); // T = string


//Generics com classe:

class Caixa<T> {
  private conteudo: T;

  constructor(valor: T) {
    this.conteudo = valor;
  }

  getConteudo(): T {
    return this.conteudo;
  }
}

const caixaString = new Caixa("Texto"); // T = string
const caixaNumero = new Caixa(123);     // T = number

console.log(caixaString.getConteudo()); // "Texto"
console.log(caixaNumero.getConteudo()); // 123


//Generics com Inteface e tipo: 

interface ApiResponse<T> {
  data: T;
  status: number;
}

const respostaUsuario: ApiResponse<{ nome: string; idade: number }> = {
  data: { nome: "Lucas", idade: 28 },
  status: 200,
};

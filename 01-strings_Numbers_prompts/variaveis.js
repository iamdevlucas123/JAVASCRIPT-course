//- Hoistign: O hoisting é um comportamento do JavaScript onde declarações de variáveis e funções são "movidas" para o topo do seu escopo durante a fase de compilação, antes do código ser executado. Isso significa que você pode referenciar variáveis ou funções antes de declará-las, mas com algumas diferenças dependendo de como a variável foi declarada (var, let, const) ou se é uma função.

/*
-- VAR --
- A forma "antiga" de declarar
- Pode ser redeclarada: Sim.
- Pode ser reatribuída: Sim.
- Hoisting: Sim, é "movida" para o topo do escopo, mas o valor inicial é undefined até ser atribuída.
EXEMPLO:
*/

console.log(y)

function testeVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 → acessível fora do bloco
}

var y = 5;
var y = 20; // Redeclaração permitida

/*
-- LET --
- Mais moderna e flexivel
- Escopo: Bloco { } (mais seguro que var).
- Redeclarada: Não no mesmo escopo.
- Pode ser reatribuída: Sim.
- Hoisting: Sim, mas não inicializada até a linha da declaração (chamado “temporal dead zone”).
- Recomendado para variáveis que mudam de valo
*/

console.log(b) //ReferenceError: Cannot access 'b' before initialization

if (true) {
  let a = 10;
  console.log(a); // 10
}
console.log(a); // Erro! a não existe fora do bloco

let b = 5;
b = 20; // Reatribuição permitida
// let b = 30; // Erro! Não pode redeclarar no mesmo escopo

/*
-- CONST --
- Escopo: Bloco { }
- redeclarada: Não.
- reatribuída: Não (o valor não pode mudar)
- Hoisting: Sim, mas também sofre "temporal dead zone"
- Recomendado para valores que não devem ser reatribuídos, garantindo mais segurança no código.
*/

const PI = 3.1415;
console.log(PI); // 3.1415
// PI = 3; // Erro! Não pode reatribuir
// const PI = 3; // Erro! Não pode redeclarar

// Objetos e arrays
const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // ✅ Pode alterar propriedades internas
// pessoa = {}; // ❌ Não pode reatribuir o objeto inteiro

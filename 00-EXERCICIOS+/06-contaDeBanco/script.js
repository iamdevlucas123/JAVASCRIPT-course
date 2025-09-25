let saldo = 0;
let saldoVisivel = false;

// welcome prompt
const nome = prompt("Digite seu nome: ");
const welcome = document.getElementById('welcome');
welcome.append(nome);

// Elements references
const saldoElement = document.getElementById('saldo');
const toggleButton = document.getElementById('visibility');
const valueDeposit = document.getElementById('depositar');
const btnDeposit = document.getElementById('btnDeposit');
const valueWithdraw = document.getElementById('sacar');
const btnWithdraw = document.getElementById('btnWithdraw');

console.log({
    saldoElement,
    toggleButton,
    valueDeposit,
    btnDeposit,
    btnDeposit,
    valueWithdraw,
    btnWithdraw
})

// function to update the balance
//Usando operador ternário, uma forma curta de escrever if/else
// condiçao (booleano) ? valorSeVerdadeiro : valorSefalso

function atualizarSaldo() {
    saldoElement.innerHTML = saldoVisivel ? ` ${saldo.toFixed(2)}` : "****"
}

// ! a exclamação inverte é um operador de negação lógica
// ele inverte o valor booleano !true -> false

function toggleSaldo() {
    saldoVisivel = !saldoVisivel;
    atualizarSaldo();
}

//deposit function



//Events

toggleButton.addEventListener('click', toggleSaldo)





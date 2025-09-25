
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
const historic = document.getElementById('historico')

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

function deposit(){
    const value = parseFloat(valueDeposit.value)

    if (isNaN(value) || value < 0){
        alert('Please type a valid value.');
        return;
    }

    saldo += value;
    valueDeposit.value = ""  //Após isso preciso zerar a variavel
    atualizarSaldo()
    alert(`Deposito de  ${value.toFixed(2)} feito com sucesso`)

    //Add to historic
    let item = document.createElement('option');
    item.text = `add R$ ${value.toFixed(2)}`;
    historic.appendChild(item);
}

// withdraw function

function withdraw(){
    const sacar = parseFloat(valueWithdraw.value);

    if (sacar > saldoElement){
        alert('Your card was declined!');
        return;
    }

    if (isNaN (sacar) || sacar <= 0){
        alert('Please type a valid number');
        return;
    }

    saldo -= sacar;
    valueWithdraw.value = "";
    atualizarSaldo();
    alert(`Saque no valor de ${sacar.toFixed(2)} realizado`);

    //Add historic
    let item = document.createElement('option');
    item.text = `Withdraw R$ ${sacar.toFixed(2)}`;
    historic.appendChild(item);
}

//Events

toggleButton.addEventListener('click', toggleSaldo)
btnDeposit.addEventListener('click', deposit)
btnWithdraw.addEventListener('click', withdraw)




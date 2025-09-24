const nome = prompt("Digite seu nome: ")
const welcome = document.getElementById('welcome')
welcome.append(nome)

function depositar(){
    let saldo = document.getElementById('saldo').value
    let depositar = document.getElementById('depositar').value

    depositar += saldo
}


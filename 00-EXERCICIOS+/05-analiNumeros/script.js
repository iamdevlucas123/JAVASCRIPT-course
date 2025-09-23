let lista = []

function isNumber(n){
    if (n > 1 && n < 100){
        return true
    }else {
        return false
    }
}

function inList(l){
    if (lista.includes(l)) {
        return false
    }else {
        return true
    }
}

function toAdd(){
    let number = Number(document.getElementById('number').value)
    let select = document.getElementById('select')

    if (inList(number) && isNumber(number)){
        lista.push(number)
        let item = document.createElement('option')
        item.text = `Numero ${number} adicionado`
        select.appendChild(item)
    }else{
        alert('Por favor digite um numero válido')
    }
    console.log(lista)
}

function toCheck(){
    let res = document.getElementById('resultado')
    let maior = Math.max(...lista)
    let menor = Math.min(...lista)
    let soma = 0

    for (let c = 0 ; lista.length > c ; c++) {
        soma += lista[c]
    }

    let media = soma/lista.length

    res.append(`Voçê digitou ${lista.length} numeros`)
    res.append(`O maior número digitado é ${maior}`)
    res.append(`O menor numero digitado é ${menor}`)
    res.append(`A soma de todos os números é ${soma}`)
    res.append(`A média da soma de todos os números é ${media}`)
}
// Toda função tem uma ação, parâmetros, chamada e um retorno
//Exemplo: 

function parImpar(n){ //n é o parametro
    if (n%2 == 0){ //Está é a ação
        return 'PAR'
    }else {
        return 'IMPAR' //Esse é o retorno
    }
}

let res = parImpar(23) //Essa é a chamada
console.log(res)




//Também podemos definir o parametro caso ele não seja definido na chamada

function soma(n1=0, n2=0){  //Ou seja, caso não exista parâmetro o retorno vai ser 0
    return n1 + n2
}

console.log(soma(2, 3)) //Aqui os parametros foram definidos
console.log(soma(2)) //Aqui somente o n1 foi definido


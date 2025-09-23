// Criando um Fatorial de forma comum:

function fatorialn(n){
    let fat = 1

    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorialn(5))  //120

// RECURSIVIDADE ou seja que chama a função dentro dela mesma:

/*
Considerando que o fatorial é o numero vezes os numeros anteriores a ele:

5! = 5 x 4 x 3 x 2 x 1

Também podemos considerar que 5! = 5 x 4!

E podemos confirmar que fatoria de 1! = 1
Logo podemos escrever:
*/

function fatorial(b){
    if (b == 1){
        return 1
    }else{
        return b * fatorial(b-1)
    }
}   

console.log(fatorial(5))





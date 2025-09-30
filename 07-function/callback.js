/*
 --- CallBack ---
 - Um callback é simplesmente uma função que é passada como argumento para outra função, para que seja chamada mais tarde (de volta = call back).
- Exemplo simples:

*/

function cumprimentar (nome, callback){
    console.log('olá '+ nome)
    callback()
}

function ask(){ 
    console.log(', Tudo bem?')
}

cumprimentar('Lucas', ask) //Olá Lucas, Tudo bem?


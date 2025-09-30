/*
--- SetTimeOut---
    - Serve para executar uma função depois de um tempo definido (em milissegundos)
    - Ele NÃO pausa o código, em vez disso ele agenda a execução da função para mais tarde.

    Sintaxe: setTimeout(callback, tempo, ...args)
        - callback -> a função que será executada depois do tempo
        - tempo -> atraso em milissegundos (1000 ms = 1 segundo)
        - ...args -> argumentos opcionais que podem ser passados para o callback

        exemplo:
*/

function mostrarMensagem(nome){
    console.log(`Olá, ${nome}`)
}

setTimeout(mostrarMensagem, 2000, "ana") //Olá, ana


//Exemplo para mostrar o tempo: agendamento: 

console.log('Inicio')

setTimeout(() => {console.log("Executado depois de 2 segundos")}, 2000);

console.log('FIM')

/*
Início
Fim
Executado depois de 2 segundos
*/



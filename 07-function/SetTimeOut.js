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


/*
---setInterval---
- Executa a função repetidamente em intervalos de tempo:
*/

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log(`Contagem: ${contador}`);

  if (contador === 5) {
    clearInterval(id); // para depois de 5 vezes
  }
}, 1000);

/*
Contagem: 1
Contagem: 2
Contagem: 3
Contagem: 4
Contagem: 5
 */
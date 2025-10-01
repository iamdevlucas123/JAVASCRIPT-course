
/*
    ---Promise---
        - Uma promise (promessa) representa um valor que ainda não está disponivel, mas estará no futuro quando uma operação assincrona terminar;
        -O JavaScript já vem com o objeto Promise() embutido na linguagem.
        - Você pode criar uma nova promessa usando o operador new
        
        ANALOGIA:
            - O atendente diz que sua pizza vai ficar pronta em 30 minutos;
            - Ele te entraga um código do pedido (está e a promise)
            - Enquanto isso voçe pode continuar fazendo outras coisas enquanto espera.
            - Depois de um tempo pode acontecer:
                - Entregou a pizza -> promise resolvida (fulfilled)
                - acabou a massa -> promise rejeitada (rejected)
        
        ESTADOS DE UMA PROMISE:
            - Pending (pendente) -> ainda não terminou
            - fulfilled (resolvida) -> terminou com sucesso (resolve)
            - Rejected (rejeitada) -> terminou com erro (reject)
*/

//Criando uma promise

const minhaPromise = new Promise((resolve, reject) => {

    const sucesso = true;

    if (sucesso) {
        resolve("Pizza entregue! 🍕"); // deu certo
    } else {
        reject("Acabou a massa 😢");  // deu erro
    }
    
});

console.log(minhaPromise) //Promise { 'Pizza entregue! 🍕' }

/*
--- método .then() e .catch()---
    - then é um metodo utilizado em uma promise.
    - Ele é uma funçao que sera chamada quando a promise for resolvida com sucesso (fulfilled)
    - Ou seja não precisa usar o if e else

    minhaPromise.then(callbackdeSucesso);

    - Já o catch é usado para tratar erros.
    - Funciona quando a promise é rejeitada (reject)
*/

promise
    .then(resultado => {
        console.log("Sucesso:", resultado);
    })
    .catch(erro => {
        console.error("Erro:", erro)
    })
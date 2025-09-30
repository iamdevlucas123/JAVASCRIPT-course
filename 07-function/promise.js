
/*
    ---Promise---
        - Uma promise (promessa) representa um valor que ainda não está disponivel, mas estará no futuro quando uma operação assincrona terminar;
        
        ANALOGIA:
            - O atendente diz que sua pizza vai ficar pronta em 30 minutos;
            - Ele te entraga um código do pedido (está e a promise)
            - Enquanto isso voçe pode continuar fazendo outras coisas enquanto espera.
            - Depois de um tempo pode acontece:
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
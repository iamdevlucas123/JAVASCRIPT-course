/*
--- async ---
- É apenas uma palavra chave que é colocada antes da função
- Ela transforma a um função em uma função assincrona
- Uma função assincrona sempre retorna uma promise, mesmo não escrevendo explicitamente.
*/

async function exemplo(){
    return "Olá mundo!"
}

exemplo().then(console.log);

//Olá mundo

/*
--- await ---
- await só podem ser usadas dentro das funções assincronas
- Ele pausa a execução da função até que a promise seja resolvida
- Depois retorna o valor resolvido da promise.
*/

function esperar(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function exemplo(){
    console.log("Esperando 2 segundos...")
    await esperar(2000) //pausa aqui
    console.log("Pronto!");
}

exemplo()

/*
Esperando 2 segundos....
--pausa de 2 seg --
Pronto!
*/

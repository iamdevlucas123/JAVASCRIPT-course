/*
--- fetch ---
- É uma função nativa do JavaScript
- Permite fazer requisições HTTP (GET, POST, PUT, DELETE. etc)
- Retorna uma promise -> ou sejá é assincrono
- Usado para consumir API/servidor
*/

fetch(url, opções);

/*
    - url: endereço da API/servidor
    - opções (opcional): métodos, cabeçalhos, corpo da requisição:
    - Retorna uma Promise que resolve em um objeto Response.

    ---Objeto response ---
    - Quando a promise criada pelo fetch se resolve, ela retorna um objeto do tipo response.
    - Esse objeto não é o JSON ou texto direto, mas contém varias informações sobre a resposta da requisição:

    - status -> codigo HTTP (ex:200, 404, 500)
    - ok -> true se o status for 200-299
    - statusText -> descrição do status
    - headers -> cabeçalho da resposta
    - body -> o corpo da resposta (geralmente transformado com .json() ou .text())
*/


fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(resposta => {
        console.log("Objeto Response: ", resposta);
        console.log("Status: ", resposta.status);
        console.log("Está ok?", resposta.ok);
        return resposta.json(); //transforma o body em JSON
    })

    .then(dados => {
        console.log("Dados do usúario: ", dados)
    })

    .catch(erro => console.error("Erro: ", erro))

    /*
    Objeto Response: Response {type: "cors", url: "...", status: 200, ok: true, ...}
    Status: 200
    Está ok? true
    Dados do usuário: { id: 1, name: "Leanne Graham", ... }
    */
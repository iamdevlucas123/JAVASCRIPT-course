/*
--- AJAX - Asynchronous JavaScript And XML ---
    - É uma técnica que permite que o navegador se comunique com o servidor sem precisar recarregar a página inteira.
    - Apesar de “XML” estar no nome, hoje em dia quase sempre usamos JSON em vez de XML.
    - É usado em JavaScript com a moderna fetch() API
    - Buscar dados de um servidor sem recarregar a página.
    - Atualizar apenas uma parte do site (ex: uma tabela, lista ou chat) dinamicamente.


--- ETAPAS ---
    1 - Evento ocorre no front-end (ex: clique em botão, carregamento de página).
    2 - JavaScript faz uma requisição assíncrona para o servidor usando AJAX.
    3 - Servidor processa a requisição e envia uma resposta (JSON, HTML, XML, texto).
    4 - JavaScript recebe a resposta e atualiza a página dinamicamente.
*/

//Exemplo com uma API fictícia:

// Função que usa AJAX para buscar dados
function buscarUsuarios() {
  fetch('https://jsonplaceholder.typicode.com/users') // URL da API
    .then(response => response.json()) // Converte JSON em objeto JS
    .then(dados => {
      dados.forEach(usuario => {
        console.log(`${usuario.name} - ${usuario.email}`);
      });
    })
    .catch(error => {
      console.error("Erro ao buscar usuários:", error);
    });
}

// Chamar a função
buscarUsuarios();

/*
Leanne Graham - Sincere@april.biz
Ervin Howell - Shanna@melissa.tv
Clementine Bauch - Nathan@yesenia.net
Patricia Lebsack - Julianne.OConner@kory.org
Chelsey Dietrich - Lucio_Hettinger@annie.ca
Mrs. Dennis Schulist - Karley_Dach@jasper.info
Kurtis Weissnat - Telly.Hoeger@billy.biz
Nicholas Runolfsdottir V - Sherwood@rosamond.me
Glenna Reichert - Chaim_McDermott@dana.io
Clementina DuBuque - Rey.Padberg@karina.biz
*/
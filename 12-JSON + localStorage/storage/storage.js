//LocalStorage e sessionStorage
// Ambos fazem parte da Web Storage API do JavaScript e permitem armazenar dados no navegador de forma simples.

/*
--- localStorage ---
    - É um armazenamento local persistente.
    - Os dados ficam salvos mesmo que o usuário feche o navegador ou reinicie o computador.
    - Cada domínio (site) tem seu próprio localStorage.
    - Só consegue armazenar strings.
    - Para objetos/arrays, usamos JSON (JSON.stringify() e JSON.parse()).
    - ~5MB por domínio
    - Ideal para: 
        - Preferências do usuário (tema, idioma)
        - Dados que devem persistir entre sessões
        - Histórico ou cache leve de informações
*/

// Salvar dados
localStorage.setItem("nome", "Lucas");

// Recuperar dados
const nome = localStorage.getItem("nome");
console.log(nome); // Lucas

// Remover dados
localStorage.removeItem("nome");

// Limpar tudo
localStorage.clear();

/*
--- sessionStorage ---
    - É semelhante ao localStorage, mas os dados duram apenas durante a sessão do navegador.
    - Ao fechar a aba ou navegador, os dados são apagados automaticamente.
    - Também armazena apenas strings.
 */

    // Salvar dados
sessionStorage.setItem("token", "abc123");

// Recuperar dados
const token = sessionStorage.getItem("token");
console.log(token); // abc123

// Remover dados
sessionStorage.removeItem("token");

// Limpar tudo
sessionStorage.clear();

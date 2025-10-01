/*
--- Error()---
- Serve para criar erros customizados
- É uma funçao nativa do JavaScript
- Uso: new Error("mensagem") para criar um objeto de erro
Esse objeto tem propriedades úteis, como:
    - message → a mensagem de erro
    - name → o nome do tipo de erro (ex: "Error")
    - stack → a pilha de execução (ótimo para debug)
*/

try {
    throw new Error("Algo deu errado!")
}catch (erro) {
    console.log("Mensagem: ", erro.message)
    console.log("Name: ", erro.name)
    console.log("Stack: ", erro.stack)
}

/*
Mensagem: Algo deu errado!
Nome: Error
Stack: Error: Algo deu errado!
    at <anonymous>:2:9
    at ...
*/

/*
Além de Error, o JavaScript tem subtipos específicos de erro:
- SyntaxError → erro de sintaxe
- ReferenceError → variável não definida
- TypeError → tipo incorreto
- RangeError → valor fora do intervalo
- EvalError → erro em eval()
- URIError → erro em encodeURI/decodeURI
*/

try {
  null.falar(); // tentando acessar método em null
} catch (erro) {
  console.log(erro.name);    // TypeError
  console.log(erro.message); // Cannot read properties of null
}


/*
--- throw ---
- throw é apenas a palavra chave para lançar erros
- Indica que o Javascript vai interromper o que está fazendo naquele ponto e vai pular para o catch mais próximo.
- Se não existir catch o erro quebra o código
*/

try {
    console.log("Linha 1")
    throw new Error("Erro lançado");
    console.log("Linha 2"); //Não será executado
} catch (e) {
    console.log("Peguei o erro", e.message)
}
console.log("linha 3")

/*
linha 1
peguei o erro: Erro lançado
linha 3
*/
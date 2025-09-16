- Arvore DOM
- Como selecionar elementos
- O DOM não tem no node.js
- Podemos selecionar elementos por:
    - Marca
    - ID
    - Nome
    - Classe
    - Seletor (CSS)
- document.getElementByTagName(p) [0]  : Ou seja, vai pegar somente o primeiro elemento paragrafo
- innerText : O texto que esta dentro do elemento.

ou seja:

<p>texto<p>

var p1 = document.getElementByTagName('p')[o]
document.write(p1.innerText)

//Resutado: texto

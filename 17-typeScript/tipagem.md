
    (JavaScript)
    -Tipagem dinâmica: quando a linguagem define qual o tipo da variável
    - Cada vez que declaramos a variavel muda para outro tipo
    - Exemplo:

```JavaScript
let age = 21
console.log(typeof(age)) //Number

age = '21'
console.log(age) //String
```

    (TypeScript)
    - Tipagem estática: o tipo da variaável é explicitamente declarado
    - após isso ela não pode ser alterado.


```TypeScript
let idade: number;
idade = 21
typeof idade //number

idade = '21' //Error: age must be of type number
```

    - TypeScript compiler: diferentemente das linguagens dinâmicas, existe um compilador que verifica se o tipo da variável continua sendo aquela que foi declarada no começo;
    - Todo código TypeScript é convertido para o seu equivalente em JS pelo TypeScript Compiler, pois os navegadores não entendem typeScript
    - O compiler também tem compatibilidade para códigos antigos para ter compatibilidade com navegadores antigos


//Problemas comuns de tipagem em JavaScript:

```JavaScript
const sum = (num1, num2) => {
    return num1 + num2
}

sum("2", "3"); //23 (não queremos isso)
```

 - Com os TypeScript

```TypeScript
const sum = {num1: number, num2: number} => {
    return num1 + num2
}

sum("3", "4") //error
```
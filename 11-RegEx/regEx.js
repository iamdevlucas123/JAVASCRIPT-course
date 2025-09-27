// RegEx (Regular Expression) é uma linguagem para buscar, analisar ou validar padrões em strings.
//Em JavaScript, existem duas formas de criar uma RegEx:

// Forma literal
const regex1 = /abc/;

// Forma usando o construtor
const regex2 = new RegExp("abc");


//Podemos verificar strings:

const regex = /Lucas/;
console.log(regex.test("Meu nome é Lucas")); // true
console.log(regex.test("Meu nome é João"));  // false


//Capturando correspondência com match():

const frase = "O carro azul e o carro vermelho";
const resultado = frase.match(/carro/g); // 'g' = global (pega todos)
console.log(resultado); // [ 'carro', 'carro' ]


//Subtituindo textos:

const texto = "Eu gosto de banana";
const novoTexto = texto.replace(/banana/, "maçã");
console.log(novoTexto); // Eu gosto de maçã

//Validar se a senha tem numeros:

const regexx = /\d/;
console.log(regexx.test("abc"));    // false
console.log(regexx.test("abc123")); // true


//Validar se a senha tem 8 caracteres com letras e numeros:

const regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

console.log(regexSenha.test("abc123"));      // false (menos de 8)
console.log(regexSenha.test("abc12345"));    // true
console.log(regexSenha.test("12345678"));    // false (só números)

/*
Explicação:
    - ^ → início da string
    - (?=.*[A-Za-z]) → precisa de pelo menos uma letra
    - (?=.*\d) → precisa de pelo menos um número
    - [A-Za-z\d]{8,} → só letras e números, mínimo 8 caracteres
    - $ → fim da string
*/

//Procurar as palavras Lucas ou joão:

const frasee = "Lucas foi ao mercado e João ficou em casa.";
const regsearch = /(Lucas|João)/g;
console.log(frase.match(regsearch)); // [ 'Lucas', 'João' ]

//Validar formato do email:

const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

console.log(regexEmail.test("teste@gmail.com"));  // true
console.log(regexEmail.test("teste.gmail.com"));  // false

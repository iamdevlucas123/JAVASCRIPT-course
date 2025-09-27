//JSON significa JavaScript Object Notation.
// Ele é um formato de texto leve para armazenar e transportar dados.
//O JSON é baseado em chave → valor, muito parecido com objetos JavaScript.

/*
Regras importantes:
    - Sempre usar aspas duplas (") para chaves e strings.
    - Chaves e valores separados por dois pontos (:).
    - Cada par chave-valor separado por vírgula (,).
O JSON pode conter:
    - Objetos { ... }
    - Arrays (listas) [ ... ]
    - Valores: string, number, boolean, null
    - Aninhamento de dados ex: [{data, {data}, data}]   
*/


const objeJson = 
    [{
        nome: 'Lucas',
        idade:  27,
        profissão: "programador",
        detalhes_profissão: {
            empresa: "empresa X",
            cargo: "senior"
        },
        cidade: "Florianópolis",
        bairro: "Santinho"
},
{
        nome: "Matheus",
        idade:  30,
        profissão: "programador",
        detalhes_profissão: {
            empresa: "empresa X",
            cargo: "Pleno"
        },
        cidade: "Curitiba",
        bairro: "Floresta"
}]

//Ele vai aparecer como um objeto
console.log(objeJson)


//Convertendo o Objeto em JSON
//Transforma um Objeto para formato de Texto ou seja vira uma string:
const jsonData = JSON.stringify(objeJson)
console.log(jsonData)
console.log(typeof(jsonData)) //string

//Convertendo JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof(objData))


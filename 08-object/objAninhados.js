// Posso aninhar dentro de um objeto outro objeto

const usuario = {
    nome: "Claudio",
    idade: 29,
    endereço: {
        rua: "Rua Manuel Marques",
        cep: 88058-700,
        cidade: "Floripa"
    }
}

//Caso eu queira referenciar 

console.log(usuario.endereço.rua) //Rua manuel Marques

//Podemos percorrer um objeto usando o "in" como em python

const pessoa = {
    nome: "Lucas",
    idade: 28,
    cidade: "Floripa"
}

for (let key in pessoa){
    console.log(key + ":" + pessoa[key])
}

/*
nome:Lucas
idade:28
cidade:Floripa
*/

//Também é possivel usar outras chamdas:

console.log(Object.keys(pessoa))
//[ 'nome', 'idade', 'cidade' ]

console.log(Object.values(pessoa))
//[ 'Lucas', 28, 'Floripa' ]
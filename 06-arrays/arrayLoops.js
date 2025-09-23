let list = [3, 4, 5, 1, 9, 4, 10]

//O loop vai referenciando o indice de printando no console cada elemento

for (let cont = 0; cont < list.length; cont++) {
    console.log(`O indice ${cont} tem o valor ${list[cont]}`)
}

//Porem existe uma forma mais simples de uma contagem correr dentro do indice
//podemos usar o in, exemplo:
//Para cada indice(c) no array(lista) printe isso:

for (c in list){
    console.log(`O indice ${c} tem o valor ${list[c]}`)
}
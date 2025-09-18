//Para condições onde tenho diversas considições especificas podemos usar a função switch

var data = new Date()
var dia = data.getDay()

//Este metodo não me da o dia em si, mas sim o numero atual da semana
console.log(dia)

/*
0 - Domingo
1 - Segunda
....
6 - Sabado
*/

switch (dia) {
    case 0:
        console.log('Domingo')
        break //Colocar para que saia da função
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
}
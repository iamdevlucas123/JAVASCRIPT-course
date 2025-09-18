var idade = 66
console.log(`Voçe tem ${idade} anos.`)

if (idade < 18 || idade > 65) {
    console.log('VOTO OPCIONAL!')
} else if (idade < 16) {
    console.log('NÃO VOTA')
}else {
    console.log('VOTO OBRIGATÓRIO!')
}
//Estrutura de repetição com teste lógico no início:

var b = 0

while (b <= 8) {
    console.log(`loop ${b}`)
    b++
}

//Estrutura de repetição com teste lógico no final
//Normalmente referenciado como do..while loop
//Este tipo de estrutura é usado quando é preciso que o código rode pelo menos uma vez sem uma condição prévia

var a = 0

do {
    console.log(`loop com DO ${a}`) 
    a++
} while (a <= 8)
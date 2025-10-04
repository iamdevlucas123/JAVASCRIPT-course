// Interfaces
// São parecidos com types porem tem outra funcionalidades
//O interface não usa o sinal de recebe(=)

interface User {
    readonly firstName: string,
    email: string
}

const cliente: User = {
    firstName: 'Lucas',
    email: 'lucasdev123@gmail.com'
}

//  cliente.firstName = 'Gabriel' (O readonly deixa definir apenas uma vez a propriedade)

//Em interfaces também conseguimos definir funções:

interface Work {
    time: number,
    cargo(): string
}

const manutençao: Work = {
    time: 8,
    cargo(){
        return 'Manager'
    }
}
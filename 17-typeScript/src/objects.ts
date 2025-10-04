// Type (Serve para definir tipos para objetos, funções, ou qualquer estrutura de dado)
type Order = {
    productId: number,
    productName: string
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string | number; //a interrogação (?) coloca como uma definição opcional no objeto
    orders: Order[] //Type aninhado
}

//Agora um objeto recebe o type de User.

const cliente: User = {
    firstName: 'Lucas',
    age: 28,
    email: 'devlucas@gmail.com',
    password: '8818Lucas', //O password é opicional pois leva o (?)
    orders: [{productId: 1245, productName: 'Salsicha'}]
}

//Considerar que quando uma propriedade é opcional ela ganha um tipo undefined ex:

console.log(cliente.password) //string | number | undefined

//Unions (Quando um objeto possui duas ou mais types)

type Author = {
    books: string[]
}

//Ele recebe os tipos de Author e User
const escritor: Author & User = {
    firstName: 'Fiodor',
    age: 37,
    books: ['O Idiota', 'Noites Brancas'],
    email: 'dostoy332@gmail.com',
    orders: [{productId: 233, productName: 'Livro'}],
    password: '8818'
}



//Definindo funções dentro do type

type work = {
    scale: number,
    cargo(): string
}


const manutençao: work = {
    scale: 8,
    cargo(){
        return 'Limpar' 
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Agora um objeto recebe o type de User.
const cliente = {
    firstName: 'Lucas',
    age: 28,
    email: 'devlucas@gmail.com',
    password: '8818Lucas', //O password é opicional pois leva o (?)
    orders: [{ productId: 1245, productName: 'Salsicha' }]
};
//Considerar que quando uma propriedade é opcional ela ganha um tipo undefined ex:
console.log(cliente.password); //string | number | undefined
//Ele recebe os tipos de Author e User
const escritor = {
    firstName: 'Fiodor',
    age: 37,
    books: ['O Idiota', 'Noites Brancas'],
    email: 'dostoy332@gmail.com',
    orders: [{ productId: 233, productName: 'Livro' }],
    password: '8818'
};
const manutençao = {
    scale: 8,
    cargo() {
        return 'Limpar';
    }
};

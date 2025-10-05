"use strict";
// Interfaces
// São parecidos com types porem tem outra funcionalidades
//O interface não usa o sinal de recebe(=)
Object.defineProperty(exports, "__esModule", { value: true });
const cliente = {
    firstName: 'Lucas',
    email: 'lucasdev123@gmail.com'
};
const manutençao = {
    time: 8,
    cargo() {
        return 'Manager';
    }
};

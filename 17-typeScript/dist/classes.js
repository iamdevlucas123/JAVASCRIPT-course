"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Conseguimos implementar em classes também
class Person {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    sayMyAge() {
        return this.age;
    }
}
const people = new Person('Lucas', 28, 'lucasdev@gmail.com');
console.log(people.sayMyAge());
//ShortHand colocando os tipos como parametros no constructor
// Quando é usado public, private ou readonly nos parâmetros do construtor p typeScript automaticamente cria propriedades da classe
/*
constructor(public name: string) {}

é equivalente a:

name: string;
constructor(name: string) {
  this.name = name;
}
*/
//Exemplo:
class Group {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    sayMyName() {
        return this.name;
    }
}
const grupo = new Group("Lucas", 28, "lucasdev@gmail.com");
console.log(grupo.sayMyName());

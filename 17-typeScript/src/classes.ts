
interface Iperson {
    name: string;
    age: number;
    email: string;
    sayMyName(): string
}

//Conseguimos implementar em classes também

class Person implements Iperson{
    name: string;
    age: number;
    email: string;

    constructor (name:string, age:number, email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayMyName (){
        return this.name
    }
}

const people = new Person('Lucas', 28, 'lucasdev@gmail.com')



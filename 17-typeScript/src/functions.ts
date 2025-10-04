const sum = (x:number, y:number) => {
    return x + y
}

const value = sum(3, 5) //Repare que 'value' automáticamente se define como number 


const concatena = (x:number, y:string) => {
    return x + y
}

const res = concatena(3, ' Lucas') //Neste caso como concatena ele se define como uma string
// Caso eu defina como (x:number, y:string):number ele passa um erro
console.log(res)


//forçando a ser uma string com o métrodo toString()
const calc = (x:number, y:number) => {
    return (x + y).toString()
}

const result = calc(3, 2)
console.log(result) // '5'


//função void (vazia)
const empty = (message:string):void => {
    //return message (Não posso fazer isso pois o void não permite)
}


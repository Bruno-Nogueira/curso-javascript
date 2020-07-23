const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]

console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]
// array com os sub-array chave, valor

Object.entries(pessoa).forEach(e => { // cada elemento seria um array que tem duas posições
    console.log(`${e[0]}: ${e[1]}`)
})
/*
nome: Rebeca
idade: 2
peso: 13
*/

Object.entries(pessoa).forEach(([chave, valor]) => { // estou desestruturando os elementos de um array
    console.log(`${chave}: ${valor}`) // jeito diferente de fazer o que foi feito acima
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // vai ser listado?
    writable: false, // vai aceitar ser modificada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2019

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // como 'a' já existe, ele vai ser sobrescrito
const obj = Object.assign(dest, o1, o2) // vai pegar todos os atributos de o1 e o2 e colocar em dest
console.log(obj) // { a: 4, b: 2, c: 3 }

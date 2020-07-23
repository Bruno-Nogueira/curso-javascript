const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const nome = 'Carla'
const pessoa = {
    nome, // mesma coisa de nome: nome,
    ola() { // mesma coisa de ola: function () {
        return 'Oi gente'
    }
}
console.log(pessoa.nome) // Carla
console.log(pessoa.ola()) // Oi gente

class Animal {}
class Cachorro extends Animal { // herança
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar()) // Au au!

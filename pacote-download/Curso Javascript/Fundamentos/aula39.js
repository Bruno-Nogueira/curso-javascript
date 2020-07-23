console.log(Math.ceil(6.1)) // arredonda pra cima (7)
console.log(Math.floor(6.1)) // arredonda pra baixo (6)
// Math é um objeto, ceil e floor são funções

const obj1 = {} 
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' // vai sobrescrever o valor do atributo nome
console.log(obj1.nome) // Bola2

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // Exec...

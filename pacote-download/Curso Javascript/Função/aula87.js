function getPreco(imposto = 0, moeda = 'RS') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco()) // RS 3900.65 (o this será produto)

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro)) // RS 39992 (carro é o objeto que vai ser usado como this na execução dessa função)
console.log(getPreco.apply(carro)) // RS 39992

console.log(getPreco.call(carro, 0.17, '$')) // $ 46790.64
// no parâmetro do call eu passei os parâmetros que serão usados na função getPreco 
// sempre o primeiro é o contexto e os outros são os parâmetros que ele vai usar na função getPreco

// no apply eu vou passar os parâmetros do getPreco dentro de um array
// primeiro parâmetro do apply é o objeto e o segundo parâmetro é o array
console.log(getPreco.apply(carro, [0.17, '$'])) // $ 46790.64

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // RS 18

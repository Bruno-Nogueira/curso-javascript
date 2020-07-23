const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) { // vai gerar um array do mesmo tamanho, mas com os dados transformados
    return e * 2
})

console.log(resultado) // [ 2, 4, 6, 8, 10 ] (todos os elementos duplicados)

// o map não transforma o array atual, ele gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]

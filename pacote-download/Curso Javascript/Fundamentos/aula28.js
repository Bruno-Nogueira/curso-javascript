const imprimirSoma = function (a, b) { // função anônima
    console.log(a + b) // armazenar uma função em uma variável
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variável
const soma = (a, b) => { // a seta substitui a palavra function
    return a + b
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // a palavra 'return' está implícita
// fazer desse jeito só se a função tiver uma única linha
// se tivesse um único parâmetro, poderia remover os parênteses
console.log(subtracao(2, 3)) // -1

const imprimir2 = a => console.log(a * 2)
imprimir2(5) // 10

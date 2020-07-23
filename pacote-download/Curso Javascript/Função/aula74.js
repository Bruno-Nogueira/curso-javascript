const soma = function (x, y) { // função anônima
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // -1

imprimirResultado(3, 4, (x, y) => x * y) // 12
// arrow function é sempre uma função anônima

// outro exemplo de função anônima é quando você cria uma função dentro de uma objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}
pessoa.falar() // Opa

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5

imprimirSoma(2) // o valor 'b' será undefined, e vai ser retornado NaN

imprimirSoma(2, 3, 5, 10) // vai retornar 5, os dois últimos números vão ser ignorados

imprimirSoma() // vai retornar NaN

function soma(a, b = 0) { // por padrão a variável 'b' é 0 (zero)
    return a + b
} 

console.log(soma(2, 3))

console.log(soma(2)) // considerou o 'b' como 0 (zero)

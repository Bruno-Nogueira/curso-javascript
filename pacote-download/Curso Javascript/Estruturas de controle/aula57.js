Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim // se o this tiver entre o início e o fim, vai retornar true
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
    console.log('fim') // vai ser executado de todo jeito
}

imprimirResultado(10)
/* Quadro de honra
   fim */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas) // [ 6.5, 5.2, 3.6 ]

// pra cada elemento ela vai chamar a função filter
// se a função retornar true, significa que aquele elemento deve ser adicionado 
// no array que está sendo gerado. Se retornar false o elemento não será adicionado no array
// a função filter não altera o array original
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7 // isso vai retornar true ou false
})
console.log(notasBaixas2) // [ 6.5, 5.2, 3.6 ]

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) // [ 6.5, 5.2, 3.6 ]

/*const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
colocar a função em uma variável*/
 
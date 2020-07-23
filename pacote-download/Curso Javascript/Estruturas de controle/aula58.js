// o último else é opcional
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // a nota vai ser arredondada pra baixo
        case 10:
        case 9:
            console.log('Quadro de honra') // se for 9 ou 10, vai ser executado essa linha de código
            break // (para os outros cases não serem executados)
        case 8: case 7:
            console.log('Aprovado') // se for 7 ou 8, vai ser executado essa linha de código
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida') // se não entrou em nenhum case, vai ser executado essa linha de código
    }
    console.log('Fim!') // essa linha de código vai sempre ser executada
}

// não precisa definir o bloco (pode ter múltiplas sentenças entre um case e outro), não precisa de {}

imprimirResultado(10) // Quadro de honra
// se não fosse o break, todos as outras linhas de código seriam executadas

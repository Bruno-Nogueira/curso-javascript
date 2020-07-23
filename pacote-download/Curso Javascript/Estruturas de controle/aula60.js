function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min // random gera um valor entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    Console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1) // ele só vai fazer esse teste depois de executar a primeira repetição 

console.log('Até a próxima')

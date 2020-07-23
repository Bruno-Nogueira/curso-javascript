/*funções arrow são funções anônimas
quando tem um único parâmetro não é obrigado a colocar parênteses*/
const soma = (a, b) => a + b // o return está implícito
console.log(soma(2, 3)) /* 5

o this de uma função arrow está associado ao local no qual a função foi escrita*/
const lexico1 = () => console.log(this === module.exports) 
lexico1() /* true (o this aponta para o módulo em que a função foi criada, e não para global)
o bind pode ser usado para mudar o contexto de uma função normal, não a arrow*/

function log(texto = 'Node') { // valor padrão
    console.log(texto)
}
log() // Node
log(undefined) // Node
log(null) // null
log('Sou mais forte') // Sou mais forte

function total(...numeros) { // agrupar todos os parâmetros em um array dentro da função
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // 14

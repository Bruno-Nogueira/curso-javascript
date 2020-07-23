// map é uma estrutura chave e valor, no qual a chave aceita função, objeto, número, string, boolean
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([ // dentro do array vai ter outros arrays, em que o primeiro elemento é a chave, e o segundo é o valor
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => { // no forEach o primeiro elemento é o valor, e o segundo é a chave
    console.log(ch, vl)
})/*
[Function] Função
{} Objeto
123 Número*/

console.log(chavesVariadas.has(123)) // true (elemento está ou não contido dentro desse map)
chavesVariadas.delete(123) // excluir um elemento
console.log(chavesVariadas.size) // 2 (quantos elementos estão presentes dentro do map)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // o valor de 123 vai ser 'b', pois ele foi substituído, pois map não aceita repetição na chave
chavesVariadas.set(456, 'b') // do lado do valor pode ter repetição
console.log(chavesVariadas) // Map { [Function] => 'Função', {} => 'Objeto', 123 => 'b', 456 => 'b' }

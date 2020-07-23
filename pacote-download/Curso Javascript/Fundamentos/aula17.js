const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // saber se o peso1 é um valor inteiro ou não

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // mostrar o valor com 2 casas decimais

console.log(media.toString()) // ele vai retornar o valor como sendo uma string

console.log(typeof media) // number

console.log(typeof Number) // função
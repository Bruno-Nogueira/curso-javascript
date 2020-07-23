let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// se a variável não vai ser mudada, usar o const ao invés do let

isAtivo = 1
console.log(!!isAtivo) // !! vai mostrar se é verdadeiro ou falso
console.log(!isAtivo) // ! vai mostrar o contrário
console.log(!true)
console.log(!!false)

// todos os números inteiros são verdadeiros com exceção do 0 (zero).

console.log(!!' ') // verdadeiro (tem um espaço no meio)
console.log(!![]) // um array, mesmo vazio, é verdadeiro
console.log(!!{}) // um objeto, mesmo vazio, é verdadeiro
console.log(!!Infinity) // tipo Infinity é verdadeiro
console.log(!!(isAtivo = Infinity)) // verdadeiro, se o valor atribuído à variável for verdadeiro

console.log(!!0) // falso
console.log(!!'') // falso (string vazia)
console.log(!!null) // falso (nulo)
console.log(!!NaN) // falso (not a number)
console.log(!!undefined) // falso
console.log(!!(isAtivo = 0)) // falso

console.log(!!('' || null || 0 || 'epa')) // verdadeiro, pois pelo menos 1 desses tem que ser verdadeiro

console.log('' || null || 0 || 'epa' || 30) // ele vai retornar o primeiro valor verdadeiro que ele encontrar, que é 'epa'

let nome = ''

console.log(nome || 'Desconhecido') // se 'nome' estiver vazio, ele vai imprimir no console 'Desconhecido'

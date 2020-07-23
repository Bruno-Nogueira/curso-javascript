let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // adicionar um novo elemento dentro de um array
aprovados.push('Abia') // adicionar um novo elemento na última posição do array
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10 (os outros elementos existem e são undefined)
console.log(aprovados[8] === undefined) // true

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort() // ordenar o array em ordem alfabética
console.log(aprovados) /* [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]
o método sort() altera o array original*/

delete aprovados[1] // vai colocar undefined na posição do elemento excluído
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia (continua sendo a Bia)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // a partir do índice 1 ele vai excluir 2 elementos, e depois vai adicionar aqueles dois elementos
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]

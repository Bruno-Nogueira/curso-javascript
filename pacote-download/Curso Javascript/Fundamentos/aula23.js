const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[5]) // undefined (não existe o elemento 5 no array)

valores[4] = 10 // o array agora passou a ter o índice 4 (não tinha antes)
console.log(valores)

valores[10] = 10 // vai colocar 5 itens vazios no meio
console.log(valores)

console.log(valores.length) // quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') // adicionar valores no array
console.log(valores)

console.log(valores.pop()) // vai remover o último elemento do array, e vai retornar esse elemento
delete valores[0] // outra forma de excluir elementos do array
console.log(valores)

console.log(typeof valores) // em JS, um array é do tipo object

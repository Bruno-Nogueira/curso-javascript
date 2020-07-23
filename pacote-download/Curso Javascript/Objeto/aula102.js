const produto = Object.preventExtensions({ // não vou conseguir adicionar atributos nesse objeto
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Extensível: false (o objeto não pode ser extendido)

produto.nome = 'Borracha' // pode alterar atributo
produto.descricao = 'Borracha escolar branca' // essa linha vai ser ignorada
delete produto.tag // pode excluir atributo
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // não pode adicionar nem excluir atributos, mas pode modificar os atributos que já existem
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva' // essa linha vai ser ignorada
delete pessoa.nome // essa linha vai ser ignorada
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

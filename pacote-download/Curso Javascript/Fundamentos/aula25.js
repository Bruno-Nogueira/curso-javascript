const a = {name: 'teste'}
const b = a // 'a' e 'b' apontam pro mesmo local de memória
b.name = 'opa' // o objeto 'a' vai ser mudado também
console.log(a)
// se eu mudar 'a', o 'b' vai perceber a mudança também
// as variáveis 'a' e 'b' acessam o mesmo objeto

let c = 3
let d = c
d = d + 1 
console.log(c) // 'd' vai ser diferente de 'c', pois se trata de tipos primitivos 

let valor
console.log(valor) // undefined (pois não foi atribuído nada para a variável valor)
// console.log(valor2) // vai dar erro: valor2 is not defined (o que é diferente de undefined)

valor = null // null significa ausência de valor, mas a variável 'valor' foi definida
console.log(valor) // a variável não aponta pra nenhum local na memória

// sempre usar o 'null' se quiser zerar o valor de uma variável do tipo referência (que aponta para um objeto ou função)

// console.log(valor.toString()) // vai dar erro, pois o 'valor' é nulo

const produto = {} // objeto vazio não é nulo, ele está setado
console.log(produto.preco) // undefined (o preco não existe dentro do produto)
console.log(produto) // vai aparecer {}

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // false
console.log(produto) // {preco: undefined}

delete produto.preco
console.log(produto) // vai aparecer {}

produto.preco = null // o produto está sem preço
console.log(produto) // {preco: null}

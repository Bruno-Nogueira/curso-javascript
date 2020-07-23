function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2149.99)) // { nome: 'Notebook', preco: 2149.99, desconto: 0.1 }

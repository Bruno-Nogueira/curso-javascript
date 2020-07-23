// função factory é uma função que retorna um ojeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa()) // { nome: 'Ana', sobrenome: 'Silva' }

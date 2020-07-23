// diferentes maneiras de criar objetos
const obj1 = {}

const obj2 = new Object

// função construtora:
function Produto(nome, preco, desc) { // preço e desc estão encapsulados (não estão disponíveis fora do objeto). Atributo privado
    this.nome = nome // o this torna a variável pública (ela não está encapsulada, escondida). Pode ser alterada
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) // não tem como alterar o valor do preço e do desc a partir do momento que você cria o produto
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) // 6.7915 2249.2425

function criarFuncionario(nome, salarioBase, faltas) { // função factory
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario()) // 6916 11020

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // Sou um JSON 

// objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto) // { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }

delete produto.preco
delete produto['marca do produto']

console.log(produto) // { nome: 'Cadeira' }

const carro =  {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // objetos dentro do array
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

delete carro.condutores // tudo que estiver abaixo vai ser deletado também
delete carro.proprietario.endereco // tudo que está abaixo de endereço também foi excluído
console.log(carro.condutores) // undefined (não vai dar erro)
// console.log(carro.condutores.length) // vai dar erro (acessar atributo de algo que esteja indefinido)

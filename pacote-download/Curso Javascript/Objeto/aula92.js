// pessoa -> 123 -> {...} // pessoa aponta para o endereço de memória 123, onde está o objeto criado
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // a constante continua apontando para 123, o objeto pra que ela aponta pode ser alterado
console.log(pessoa) // { nome: 'Pedro' }

// pessoa -> 456 -> {...} // você quer que pessoa agora aponte para outro endereço
// pessoa = { nome: 'Ana' } // vai dar erro, pois pessoa é uma constante

Object.freeze(pessoa) // quando o objeto está congelado você não consegue mais mexer nele
pessoa.nome = 'Maria' // isso vai ser ignorado
console.log(pessoa.nome) // João (não vai dar erro)

const pessoaConstante = Object.freeze({ nome: 'João' }) // criar um objeto desde o começo com freeze
console.log(pessoaConstante) // { nome: 'João' }

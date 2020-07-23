let pessoa = {
    nome: 'Ana',
    falar: function() {
        return `Eu sou ${this.nome}` // nesse caso this é a pessoa
    }
}
console.log(pessoa.falar()) // Eu sou Ana
console.log(pessoa.nome) // Ana

const f2 = () => console.log('Oi')
f2() // Oi

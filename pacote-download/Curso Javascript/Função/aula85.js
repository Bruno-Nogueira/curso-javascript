function Pessoa(nome) {
    this.nome = nome // se não tivesse essa linha, não seria possível alterar o valor da variável nome (e se eu escrevesse console.log(p1.nome) daria undefined)
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`) 
    }
}
const p1 = new Pessoa('João')
p1.falar() // Meu nome é João
console.log(p1.nome) // João

// Você pode criar objeto a partir de uma função construtora, de uma classe ou de uma função factory
 
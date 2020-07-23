// na função arrow, o this é assossiado no local em que a função é escrita
// o this nunca irá variar se a função for do tipo arrow
// se a função for escrita no contexto global, o this sempre vai apontar para o contexto global (função arrow)
// para o this não variar na função normal, é preciso usar a função bind

const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao) // this se refere ao objeto pessoa
    }
}
console.log(pessoa) // { saudacao: 'Bom dia', falar: [Function: falar] }
pessoa.falar() // Bom dia

const falar = pessoa.falar
falar() // undefined (o this dessa função não se refere mais ao objeto pessoa)

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind você passa um objeto que você quer que seja resolvido o this
falarDePessoa() // Bom dia

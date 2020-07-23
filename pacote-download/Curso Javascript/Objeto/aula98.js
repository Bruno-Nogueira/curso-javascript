const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai) // criou o objeto filha1 tendo como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
/*o segundo parâmetro desse método vai ser um objeto que eu vou colocar todos os atributos  
que eu quero adicionar no meu objeto filha2 que vai ser criado*/

console.log(Object.keys(filha1)) // [ 'nome' ]

for (let key in filha2) { // vai mostrar os keys do protótipo de filha2
    console.log(key)
}
/*
nome
corCabelo
*/

for (let key in filha2) { 
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
/*
nome
Por herança: corCabelo
*/

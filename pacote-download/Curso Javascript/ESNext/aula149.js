function tag(partes, ...valores) { // dois arrays
    console.log(partes) // aquilo que não faz parte do que foi interpolado
    console.log(valores) // o que foi interpolado dentro da string
    return 'Outra string'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)/*
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra string

começando a partir do array partes, e alternando entre partes e valores você consegue remontar a string inteira*/

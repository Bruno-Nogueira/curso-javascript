{
    var a = 2 // não tem escopo de bloco
    let b = 3 // tem escopo de bloco
    console.log(b) // 3
}
console.log(a) // 2
// console.log(b) // vai dar erro

const produto = 'iPad'
console.log(`${produto}
é
caro!`)/* só é possível quebrar linhas assim com template string
iPad
é
caro!*/

const [l, e, ...tras] = 'Cod3r'
console.log(l) // C
console.log(e) // o
console.log(tras) // [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x) // 1
console.log(y) // 3

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(nome) // Ana
console.log(i) // 9

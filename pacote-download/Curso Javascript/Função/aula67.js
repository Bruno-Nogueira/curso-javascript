function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma()) // 3
console.log(soma(3)) // 5 (a = 3, b e c recebem o valor padrão 1, pois b e c são false)
console.log(soma(1, 2, 3)) // 6
console.log(soma(0, 0, 0)) // 3 (0 é false, por isso a, b e c serão retornados 1)

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // se o índice 1 estiver dentro de arguments, ele retorna b, caso contrário retorna 1
    c = isNaN(c) ? 1 : c 
    return a + b + c
}
console.log(soma2(0, 0, 0)) // 0

function soma3(a = 1, b = 1, c = 1) { // essa é a melhor forma
    return a + b + c
}

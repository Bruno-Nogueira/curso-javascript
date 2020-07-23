console.log(soma(3, 4)) // o interpretador do JS primeiro carrega as funções nomeadas, e depois começa a executar o código

function soma(x, y) {
    return x + y
}

const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) // isso não poderia ficar na primeira linha, pois não é uma função nomeada

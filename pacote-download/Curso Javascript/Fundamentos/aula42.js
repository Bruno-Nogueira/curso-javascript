const [a] = [10]
console.log(a) // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) // 10 9 undefined 0
// n5 tá fora do array, por isso é undefined
// n6 só não tá undefined pois tem um valor padrão

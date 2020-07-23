console.log('01)', '1' == 1) // 01) true (estou comparando valor, e não estou preocupado com tipo)
console.log('02)', '1' === 1) // 02) false (estou comparando valor e tipo) 
console.log('03)', '3' != 3) // 03) false
console.log('04)', '3' !== 3) // 04) true

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 0 em JS é a data de referência (01 de janeiro de 1970)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false, pois eles estão em endereço de memória diferentes
console.log('10)', d1 == d2) // false, pois eles estão em endereço de memória diferentes
console.log('11)', d1.getTime() === d2.getTime()) // true, pois agora eu estou comparando Numbers
console.log('12)', d1.getTime() == d2.getTime()) // true, pois agora eu estou comparando Numbers

console.log('13)', undefined == null) // true
console.log('14)', undefined === null) // false

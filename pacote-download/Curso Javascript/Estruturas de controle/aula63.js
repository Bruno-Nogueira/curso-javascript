const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x ==5) {
        break
    }
    console.log(`x = ${nums[x]}`)
}
/*
x = 1
x = 2
x = 3
x = 4
x = 5
*/

console.log()

for (let x in nums) {
    if (x ==5) {
        continue // o continue vai interromper a repetição atual, e vai para a próxima repetição
    }
    console.log(`x = ${nums[x]}`)
}
/*
x = 1
x = 2
x = 3
x = 4
x = 5
x = 7 (não teve x = 6 por causa do continue)
x = 8
x = 9
x = 10
*/

console.log()

externo: for (let a in nums) { // 'externo' é um rótulo que está associado ao primeiro laço for
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // esse break vai valer para o for externo, ou seja, o primeiro for
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
// se não tivesse escrito 'externo', o break quebraria o for mais interno (o segundo for, que é o mais próximo dele)

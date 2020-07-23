let num1 = 1
let num2 = 2

num1++ // acrescenta uma unidade ao valor da variável
console.log(num1) // 2
num1-- // subtrai uma unidade ao valor da variável (pode ser --num1 também)
console.log(num1) // 1

console.log(++num1 === num2--) // true (ele vai somar 1 ao num1, depois comparar, depois diminuir 1 do num2)
// o ++ ou -- antes do num1, faz essa operação ter prioridade

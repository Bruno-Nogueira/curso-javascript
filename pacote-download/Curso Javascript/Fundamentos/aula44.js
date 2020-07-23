// estou criando um novo array com esses dois atributos que foram desestruturados do array
function rand( [min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]   
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}              
console.log(rand([50, 40]))
console.log(rand([992])) // esse é o mínimo, o máximo ele vai assumir o valor de 1000
console.log(rand([, 10])) // esse é o máximo, o mínimo ele vai assumir o valor de 0
console.log(rand([])) // ele vai assumir os valores padrões (0 e 1000)
// console.log(rand()) // vai dar erro, porque ele vai tentar desestruturar elementos de algo que é nulo

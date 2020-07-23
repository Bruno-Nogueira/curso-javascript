// set é um conjunto não indexado e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // vai ser ignorado, pois é uma repetição

console.log(times) // Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size) // 5 (número de elementos)
console.log(times.has('Vasco')) // true (elemento está ou não contido dentro desse set)
times.delete('Flamengo') // excluir elemento

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set { 'Raquel', 'Lucas', 'Julia' }

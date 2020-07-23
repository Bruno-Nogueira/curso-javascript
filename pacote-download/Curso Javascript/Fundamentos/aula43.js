function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
/* não significa que tem um objeto dentro da função rand. Significa que eu vou passar um objeto pra essa função,
e dentro da função, ao invés de acessar objeto.min e objeto.max, eu quero que ele já tire de dentro do objeto 
o atributo min e o atributo max, e entregue esses dois atributos prontos */

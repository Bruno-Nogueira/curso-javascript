function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0 // esse atributo pertence apenas à função carro (não tem como acessar objeto.valocidadeAtual)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function () { // método público (por causa do this)
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) // 20

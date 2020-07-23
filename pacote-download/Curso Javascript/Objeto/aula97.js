Object.prototype.attr0 = '0' // protótipo do avô ganha esse atributo
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // referenciar que o pai tem como protótipo o avô
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1) // A
console.log(filho.attr0) // 0
console.log(filho.attr3) // C (como ele achou o atributo em filho, ele não vai procurar nos protótipos)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // o super é usado para referenciar o meu protótipo (o this faz referência ao objeto atual)
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)
console.log(ferrari) // { modelo: 'F40', velMax: 324 } (não mostra os atributos do seu protótipo)

volvo.acelerarMais(100)
console.log(volvo.status()) // V40: 100km/h de 200km/h

ferrari.acelerarMais(300)
console.log(ferrari.status()) // 300km/h de 324km/h

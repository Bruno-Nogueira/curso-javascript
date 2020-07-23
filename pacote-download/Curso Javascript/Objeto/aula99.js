function MeuObjeto() {}
console.log(MeuObjeto.prototype) // esse atributo é um objeto vazio

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true
/* quando você cria um objeto a partir de uma função construtora usando o new, o protótipo desse
objeto automaticamente aponta para o nome da função .prototype (nesse caso MeuObjeto.prototype),
e não Object.prototype (que é quando você cria um objeto a partir do new Object ou a partir do objeto literal)*/

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() // Bom dia! Meu nome é Anônimo

obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é Rafael

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype /* estou mudando a referência do protótipo do objeto 3
para sair de Object.prototype*/

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // true
console.log(MeuObjeto.__proto__ === Function.prototype) // true
console.log(Object.prototype.__proto__) // null

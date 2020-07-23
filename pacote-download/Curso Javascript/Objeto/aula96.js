const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) /* {} (protótipo é um objeto vazio mas existe)
acessar quem é o protótipo (pai) desse objeto
se eu acessar um atributo de ferrari e ele não encontrar, ele vai procurar no protótipo,
depois no protótipo do protótipo, etc.*/

console.log(ferrari.__proto__ === Object.prototype) /* true
um objeto criado, por padrão ele aponta pra Object.prototype
Object.prototype é o protótipo de mais alto nível*/

console.log(Object.prototype.__proto__) /* null
não tem nenhum protótipo acima do Object.prototype*/

// criar função de forma literal
function fun1 () { }

// armazenar função em um variável
const fun2 = function () { }

// armazenar função em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3)) // 5

// armazenar função em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar()) // Opa

// passar função como parâmetro
function run (fun) {
    fun()
}
run(function () {console.log('Executando...')}) // Executando...

// uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(3, 2)(5) // 10

const cincoMais = soma(2, 3)
cincoMais(4) // 9

let comparaComThis = function (param) {
    console.log(this === param) // esse this aponta para o objeto global
}
comparaComThis(global) // true
comparaComThis(this) // false

const obj = {}
comparaComThis = comparaComThis.bind(obj) // o this agora se refere a obj
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param) // o this dessa função é o módulo em que ela foi escrita
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true (cada arquivo do node representa um módulo)

// o this nunca irá variar se a função for do tipo arrow, nem se usar o bind para tentar mudar

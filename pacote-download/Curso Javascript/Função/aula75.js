const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// pra cada elemento do array ele chama a função imprimir
// forEach é uma função de fabricantes, que é um array
fabricantes.forEach(imprimir)
/*
1. Mercedes
2. Audi
3. BMW
*/

fabricantes.forEach(function (a) {
    console.log(a) // o parâmetro 'a' será cada um dos elementos desse array
})
/*
Mercedes
Audi
BMW
*/

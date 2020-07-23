const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice) { // o primeiro parâmetro é o elemento, o segundo é o índice, o terceiro é o array completo (nesse caso o array aprovados)
    console.log(`${indice + 1}) ${nome}`)
})
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/

aprovados.forEach(nome => console.log(nome))
/*
Agatha
Aldo
Daniel
Raquel
*/

const exibirAprovados = aprovado => console.log(aprovado) // armazenar função em uma constante
aprovados.forEach(exibirAprovados) // jeito diferente de fazer o que foi feito acima

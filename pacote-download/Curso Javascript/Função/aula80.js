const valor = 'Global'

function minhaFuncao() { // o contexto léxico em que essa função foi criado é esse módulo, arquivo aula80.js
    console.log(valor) // não foi dentro de um objeto e não foi dentro de uma outra função
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Global
/* a função carrega consigo o local onde ela foi definida,
ela vai procurar dentro do escopo léxico onde ela foi definida
ela não vai procurar no local de execução da função, mas sim 
no local onde ela foi definida */

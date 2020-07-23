// closure é o escopo criado quando uma função é declarada

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local
// a função tem memória do local da sua origem, mesmo quando ela é executada em outro lugar

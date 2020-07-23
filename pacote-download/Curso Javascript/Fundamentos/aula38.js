const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

// como os dois const estão em contextos diferentes, não gera conflito

console.log(exec()) // Falaaa
console.log(saudacao) // Opa

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(cliente)

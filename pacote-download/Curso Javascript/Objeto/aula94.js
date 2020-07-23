const sequencia = {
    _valor: 1, // convenção (não quero que essa variável seja alterada)
    get valor() { return this._valor++ }, // mesmo nome de função, um sem parâmetro, outro com
    set valor(valor) { // fazer validação de dados se quiser
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor) // 1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000 1001
sequencia.valor = 900 // foi ignorado
console.log(sequencia.valor, sequencia.valor) // 1002 1003

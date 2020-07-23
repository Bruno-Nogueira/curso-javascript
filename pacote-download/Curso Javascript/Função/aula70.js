function Pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++ // esse this não apontaria para o objeto Pessoa, se não fosse pelo bind
        console.log(this.idade)
    }.bind(this), 1000) // a cada 1000 milissegundos (1 segundo) a função dentro da função setInterval vai ser executada novamente
}
new Pessoa

function Pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++ 
        console.log(self.idade) // self vai referir ao objeto Pessoa
    }, 1000) 
} // outra maneira de fazer, desse jeito não precisa do bind

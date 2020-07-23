function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++ // this aponta para Pessoa, pois ele foi escrito dentro da função Pessoa
        console.log(this.idade)
    }, 1000)
}
new Pessoa

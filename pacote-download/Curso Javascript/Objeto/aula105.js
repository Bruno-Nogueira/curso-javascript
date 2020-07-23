class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome // o objeto que foi instanciado vai ter o atributo sobrenome, que vai receber o sobrenome que eu passei como parâmetro
    }
}

class Pai extends Avo { // a classe Pai tem a classe Avô como protótipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // chamar o construtor do Pai
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }

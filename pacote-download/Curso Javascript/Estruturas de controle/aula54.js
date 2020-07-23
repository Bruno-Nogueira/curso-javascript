function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}
soBoaNoticia(8.1) // Aprovado com 8.1
soBoaNoticia(6.1) // não vai aparecer nada

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    }
}
seForVerdadeEuFalo() // não vai aparecer nada pois 'valor' é falso

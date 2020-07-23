function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { // resolve é uma função que será chamada quando a promessa for atendida
        setTimeout(() => {
            resolve(frase) // o resolve aceita um único parâmetro. Se chamasse o reject daria um erro
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Que legal!') // pra acessar o resultado de uma promessa atendida de forma correta, usa-se a função then
    .then(frase => frase.concat('?!?')) // pode chamar a função then quantas vezes você quiser
    .then(outraFrase => console.log(outraFrase)) // Que legal!?!? (depois de esperar 3 segundos)
    .catch(e => console.log(e)) /* pra tratar o caso de erro (no caso de reject)
se tivesse reject ao invés de resolve, mostraria a frase: Que legal!*/

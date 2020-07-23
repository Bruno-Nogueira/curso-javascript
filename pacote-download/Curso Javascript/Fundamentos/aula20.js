const escola = 'Coder'

console.log(escola.charAt(4)) // vai aparecer a letra que está no índice 4 dentro da string
console.log(escola.charAt(5)) // se passar um índice que está fora do tamanho da string, vai ser retornado um valor vazio

console.log(escola.charCodeAt(3)) // pegar o valor de 'e' na tabela unicode

console.log(escola.indexOf('d')) // saber em que posição está a letra 'd'

console.log(escola.substring(1)) // vai mostrar a partir do índice 1 até o final
console.log(escola.substring(1, 3)) // vai mostrar do índice 1 ao índice 2

console.log('Escola '.concat(escola).concat('!')) // Escola Coder! (concatenação)

// literal é o dado sem armazenar em uma variável

console.log(escola.replace('C', 'A')) // Aoder

console.log('Ana,Maria,Pedro'.split(',')) // converter string em um array // dentro do split eu coloco o que usar como separador
// vai gerar um array com 3 elementos

console.log('3' + 2) // ele não vai somar, ele vai concatenar pois a string tem preferência
console.log('3' - 2) // ele vai subtrair, pois o '-' não faz sentido no mundo da string nesse caso

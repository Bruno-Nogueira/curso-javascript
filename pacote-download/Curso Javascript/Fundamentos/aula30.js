var numero = 1
{
    var numero = 2 
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// não existe escopo de bloco para uma variável do tipo var (exceto função)
// dentro = 2
// fora = 2

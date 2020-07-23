var numero = 1 // se substituir var por let, o resultado final vai ser o mesmo nesse caso
{
    let numero = 2 
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// o let tem o escopo apenas dentro do bloco (qualquer bloco)
// dentro = 2
// fora = 1

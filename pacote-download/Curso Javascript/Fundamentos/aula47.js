function compras(trabalho1, trabalho2) { // trabalho1 e trabalho2 são valores boleanos
    const comprarSorvete = trabalho1 || trabalho2 // se um dos dois for true, a const é true
    const comprarTv50 = trabalho1 && trabalho2 // se os dois forem true, a const é true
    const comprarTv32 = trabalho1 != trabalho2 // se os dois forem diferentes, a const é true
    const manterSaudavel = !comprarSorvete // se comprarSorvete for true, a const vai ser false e vice-versa
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

/* !! (duas negações lógicas pra converter algo pra boolean)

quando a chave é omitida, ela e o valor são a mesma coisa {comprarSorvete: comprarSorvete, etc} */

console.log(compras(true, true))
/* {
  comprarSorvete: true,
  comprarTv50: true,
  comprarTv32: false,
  manterSaudavel: false
}
*/

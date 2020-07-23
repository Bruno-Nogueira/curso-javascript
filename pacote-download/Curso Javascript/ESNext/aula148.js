const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // colocar todos atributos de funcionário em clone
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]

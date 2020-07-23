const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos) /* [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ]
os arrays filhas e filhos não são mexidos*/

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) /* {"a":1,"b":2,"c":3}
converter obj em JSON
a função foi excluída pois JSON é um formato de dados
JSON é um formato textual*/

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) /* { a: 1, b: 2, c: 3 }
converter JSON em obj
o nome do atributo deve ser delimitado por aspas duplas em JSON
objeto gerado a partir de um texto*/

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) /* { a: 1, b: 'string', c: true, d: {}, e: [] }
string tem que estar em aspas duplas
valor boleano é suportado
pode ser colocado também objetos e arrays dentro do formato JSON

pesquisar JSON validator na internet para saber se seu texto é um formato JSON válido*/

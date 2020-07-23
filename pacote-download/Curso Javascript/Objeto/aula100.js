console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // o array tem a função reverse
}

console.log('Escola'.reverse()) // alocsE

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // 1

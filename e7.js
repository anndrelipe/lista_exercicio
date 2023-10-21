var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = parseInt(prompt())

if (A % 2 == 0) {
    console.log(`Como A é par, A + 5 = ${(A+5)}`)
} else {
    console.log(`Como A é ímpar, A + 8 = ${(A+8)}`)
}
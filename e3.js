var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let n = parseInt(prompt())

if (n % 2 === 0) {
    console.log('Par.')
} else {
    console.log('Ímpar.')
}

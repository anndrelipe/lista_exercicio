var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = true;
let B = false;

let conjunto = [A,B];

for (let i = 0; i < 2; i++) {
    if (conjunto[i] === true) {
        console.log(conjunto[i],'é verdadeiro.')
    } else {
        console.log(conjunto[i],'é falso.')
    }
    
}
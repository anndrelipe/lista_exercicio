var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = parseInt(prompt());
let B = parseInt(prompt());
let C = 0;

if (A === B) {
    C = (A+B);
} else {
    C = (A*B)
}

console.log(C)
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = parseInt(prompt());
let B = parseInt(prompt());
let C = parseInt(prompt());

if ((A+B) < C) {
    console.log('A + B é menor do que C.')
} else {
    console.log('A + B é maior que C.')
}
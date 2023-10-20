var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = parseInt(prompt());

if (A > 0) {
    console.log('O dobro de A é',(A*2))
} else {
    console.log('O triplo de A é', (A*3))
}
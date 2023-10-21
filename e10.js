var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let peso = parseFloat(prompt());
let altura = parseFloat(prompt());

let imc = peso/(altura**2);

if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (18.5 <= imc < 25) {
    console.log('Peso normal.');
} else if (25 <= imc < 30) {
    console.log('Acima do peso.')
} else {
    console.log('Obeso')
}
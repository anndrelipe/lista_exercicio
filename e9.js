var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let altura = parseFloat(prompt());
let sexo = prompt()

let peso_ideal_masc = ((72.7 * altura) - 58);
let peso_ideal_fem = ((62.1 * altura - 44.7));

if (sexo == 'Masculino') {
    console.log(`Seu peso ideal é ${peso_ideal_masc}`)
} else if (sexo == 'Feminino') {
    console.log(`Seu peso ideal é ${peso_ideal_fem}`)
}
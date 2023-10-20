var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let sexo = prompt();
let nome = prompt();
let estadoCivil = prompt();

let cond = ((sexo === 'F') && (estadoCivil === 'Casada'));

if (cond) {
    console.log('Quanto tempo de casada?')
} 
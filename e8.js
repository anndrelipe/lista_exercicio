var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let A = parseInt(prompt());
let B = parseInt(prompt());
let C = parseInt(prompt());

let aux = 0;

let numeros = [A,B,C];


for (let i = 0; i <= 1; i++) {
    for (let i = 0; i <= 1; i++) {
        if (numeros[i] < numeros[i+1]){
            let aux = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = aux;
        }
    }
}

console.log(numeros)
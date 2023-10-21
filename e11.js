var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto){return lines.shift();};

let preco = parseFloat(prompt())
let forma_pagamento = prompt()

if (forma_pagamento == 'À vista em dinheiro ou cheque') {
    console.log('Preço a pagar =', (preco - preco*0.1))
}   else if ('À vista no cartão de credito'){
        console.log('Preço a pagar =', (preco - preco*0.15))
}   else if ("Em duas vezes, preço normal de etiqueta sem juros") {
        console.log('Preço a pagar:', (preco))
}   else if ('Em duas vezes, preço normal de etiqueta com juros') {
        console.log('Preço a pagar:', (2*((preco/2) * 1.1)))
}

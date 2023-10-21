
//Exercício: Adivinhe o Número Secreto

// Você quer criar um jogo de adivinhação para seus alunos. O computador escolhe um número aleatório entre 1 e 100, e o jogador tem que adivinhar qual é esse número. Se o jogador inserir um número menor do que o número secreto, o programa deve dizer "Muito baixo!". Se o jogador inserir um número maior, o programa deve dizer "Muito alto!". Se o jogador adivinhar corretamente, o programa deve dizer "Parabéns, você acertou!".

// Regras:

// O número secreto é escolhido aleatoriamente entre 1 e 100.
// O jogador tem um número limitado de tentativas para adivinhar o número secreto.
// Após cada tentativa, o programa informa se o número inserido é muito alto, muito baixo ou se o jogador acertou.
// O jogo deve continuar até que o jogador adivinhe corretamente ou use todas as tentativas disponíveis.


let chute = 0
let numero_secreto = 0
let tentativas = 10
while (numero_secreto == 0) {
    numero_secreto = Math.floor((Math.random()*100))
}

while (true) {
    if (tentativas >= 1) {
        chute = parseInt(prompt());
        if (chute > numero_secreto) {
            console.log('Muito alto!');
        } else if (chute < numero_secreto){
            console.log('Muito baixo!');
        } else if (chute === numero_secreto) {
            console.log(`Parabéns você acertou em ${10 - tentativas} tentativas! O número secreto era: ${numero_secreto}`)
            break;
        } 
        tentativas -= 1;
    } else {
        console.log('Você perdeu! O número secreto era:',numero_secreto)
        break;
    }
}


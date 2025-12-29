const min = 1;
const max = 100;
const resposta = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(resposta);

let chute, tentativas = 1;

chute = window.prompt("Chute um numero");

while(chute != resposta){
    if(chute < resposta) chute = window.prompt(`NOP, tenta um numero MAIOR`);
    else chute = window.prompt(`NOP, tenta um numero menor`);

    tentativas++;
}

window.alert(`Parabens, voce acertou em ${tentativas} vezes`);
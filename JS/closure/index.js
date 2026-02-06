//Usado muito em React para segurança de variaveis

function deFora(){

    let mensagem = "oiii";
    function dentro(){
        console.log(mensagem);
    }
    dentro(); //nada acontece ate chamarmos a função de fora
}

let mensagem = "tchau" //Outro escopo, então é outra variavel de mensagem

deFora();

//Exemplo de contador

function incremento(){
    let contador = 0;
    contador++;
    console.log(`O contador esta em ${contador}`);
}

incremento();
incremento(); //não funcuiona pq o contador reinicia toda vez

//jeito certo

function criarContador(){
    let contador = 0;

    function incremento2(){
        contador++;
        console.log(`O contador esta em ${contador}`);
    }
    function getContador(){
        return contador;
    }

    return {incremento2, getContador};

}

const contador = criarContador();

contador.incremento2();
contador.incremento2();
contador.incremento2(); //O bom de fazer assim é que n da para modificar oq esta dentro

console.log(contador.contador); //n conseguimos acessar
console.log(`O contador esta em ${contador.getContador()}`);

//Ultimo exemplo aqui

function criarJogo(){
    
    let score = 0;
    
    function aumentarScore(pontos){
        score += pontos;
        console.log(`+${pontos}pts`);
    }
    
    function diminuirScore(pontos){
        score -= pontos;
        console.log(`-${pontos}pts`);
    }
    
    function getScore(){
        return score;
    }

    return {aumentarScore, diminuirScore, getScore};
}

const jogo = criarJogo();

jogo.aumentarScore(6);
jogo.aumentarScore(3);
jogo.diminuirScore(5);

console.log(`O score final é ${jogo.getScore()}`); //Fazendo assim eu n consigo entrar na variavel
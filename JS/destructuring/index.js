// usa [] para arrays e {} para objetos

//Trocar a valor entre duas variaveis

let a = 1;
let b = 2;

[a, b] = [b, a]; //Noos estamos desconstruindo 2 valores e recolocando eles

console.log(a);
console.log(b);

//Troca 2 elementos em um array;

const cores = ["vermelho", "rosa", "verde", "azul", "preto"];

[cores[0], cores[4]] = [cores[4], cores[0]];

console.log(cores);

//Colocar elementos de um array em variaveis;

const[primeiraCor, segundaCor, terceiraCor, ...coresExtras] = cores;

console.log(primeiraCor);
console.log(segundaCor);
console.log(terceiraCor);
console.log(coresExtras); //Aqui n resulta em uma variavel, mas sim um array com o resto das variaveis n utilizadas

//Extrair valores de um objeto

const pessoa1 = {
    primeiroNome: "Gustavo",
    ultimoNome: "Fornaciari",
    idade: 19,
}

const pessoa2 = {
    primeiroNome: "Ana",
    ultimoNome: "Araujo",
    idade: 20, //Idosa
    trabalho: "Namorada do Gustavo",
}

const {primeiroNome, ultimoNome, idade, trabalho = "Não trabalha vagabundooooooo"} = pessoa1; //Pode brincar entre pessoa 1 e 2 aqui

console.log(primeiroNome);
console.log(ultimoNome);
console.log(idade);
console.log(trabalho);

//Destructuring funcoes

function verPessoas({primeiroNome, ultimoNome, idade, trabalho="desempregado"}){
    console.log(`Nome: ${primeiroNome} ${ultimoNome}`);
    console.log(`idade: ${idade}`);
    console.log(`trabalho: ${trabalho}`);
}

verPessoas(pessoa2);
const nome_inteiro = "Gustavo Gomes Fornaciari";

let nome = nome_inteiro.slice(0,7); //Não conta n n-ézimo termo
let ultimo_sobrenome = nome_inteiro.slice(14,25); // ou tmb pode n ter o fim slice(14)

let ultima_letra = nome_inteiro.slice(-1);

console.log(nome_inteiro.length)
console.log(nome);
console.log(ultimo_sobrenome);
console.log(ultima_letra);

//Agora um coiso mais util aqui skss

let primeiro_nome = nome_inteiro.slice(0,nome_inteiro.indexOf(" "));
let sobrenomes = nome_inteiro.slice(nome_inteiro.indexOf(" ") + 1);

console.log(primeiro_nome);
console.log(sobrenomes);
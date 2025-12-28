let x; //Basicamente pythun junto com c
x = 1000;

console.log(x); //Java é feio de mais mds skkksskkk

let idade = 19;
console.log(idade);

let preço = 31323.323;
console.log(preço);

let ira = 47.2;
console.log(ira);

console.log(`Voce tem ${idade} anos`);
console.log(`Voce tem ${ira} de ira`); //homossexualismo de `

console.log(typeof idade);



let primeiro_nome = "Gustavo o foda";

console.log(typeof primeiro_nome);
console.log(`Meu nome é ${primeiro_nome}`);

let numeros = "123";
console.log(`um numero aq q ta escrito, n é numero de vdd: ${numeros}`);
console.log(numeros);



let esta_online = true;
console.log(typeof esta_online);
console.log(`${primeiro_nome} esta online? \n${esta_online}`);

/* 
    Agora demonstrarei algo realmente util
*/

document.getElementById("p1").textContent = `Meu nome é ${primeiro_nome}`;
document.getElementById("p2").textContent = idade;
document.getElementById("p3").textContent = esta_online;
let numeros = [0,1,2,3,4,5,6,7,8,9];
let maximo = Math.max(...numeros); //esse é o spred
let min = Math.min(...numeros);

console.log(maximo);
console.log(min);

let nome = "Gustavo Fornaciari";
let letras = [...nome];

console.log(nome[1]);
console.log(letras);
console.log(letras.join("-"));

let frutas = ["maça", "banana", "laranja"];
let vegetais = ["cenouras", "cebolas", "batata"];

let comidas = [...frutas, ...vegetais, "ovos"]; //MUITO BOM

console.log(frutas);
console.log(comidas);

teste = [1,"1",1.1];
console.log(teste);

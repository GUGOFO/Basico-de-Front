const frutas = [{nome: "maça", cor: "vermelha", calorias: 45}, //Esse espaço é somente para leitura, mas é uma boa pratica
                {nome: "banana", cor: "amarela", calorias: 60},
                {nome: "melancia", cor: "vermelha", calorias: 10},
                {nome: "cacau", cor: "marrom", calorias: 100},
                {nome: "laranja", cor: "laranja", calorias: 50}];

for(const index in frutas){
    console.log(frutas[index].nome);
}

frutas.push({nome: "cereja", cor: "roxa", calorias: 2});
console.log(frutas.length);

frutas.pop();
console.log(frutas.length);

/*so sobra o 0
frutas.splice(1,4); //so sobra o 0
console.log(frutas.length);
*/

frutas.forEach(fruta => console.log(fruta.cor));

const nomeFrutas = frutas.map(fruta => fruta.nome);
console.log(nomeFrutas);

const frutasVermelhas = frutas.filter(fruta => fruta.cor == "vermelha");
console.log(frutasVermelhas);

const frutaMaiorCaloria = frutas.reduce((maximo, fruta) => fruta.calorias > maximo.calorias ? fruta : maximo);
console.log(frutaMaiorCaloria);

const frutaMenorCaloria = frutas.reduce((minim, fruta) => fruta.calorias < minim.calorias ? fruta : minim);
console.log(frutaMenorCaloria);
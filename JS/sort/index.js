let frutas = ["mamao", "goiaba", "peçego", "maca"];
frutas.sort();
console.log(frutas);

let numeros1 = [3,2,1,5,4,7,8,6,10,9]; //Ta errado pq estamos considerando isso ai como strings e n numeros booo
numeros1.sort();
console.log(numeros1);

//o correto aqui (funciona negativo)

let numeros2 = [3,2,1,5,4,7,8,6,10,9]; //organizado crescente
numeros2.sort((a,b) => a - b);
console.log(numeros2);

let numeros3 = [3,2,1,5,4,7,8,6,10,9]; //organizado decrescente
numeros3.sort((a,b) => b - a);
console.log(numeros3);

//exemplo pratico aqui

let pessoas = [{nome: "Ana", idade: 20, ira: 4.2},
               {nome: "Gustavo", idade: 19, ira: 2.1},
               {nome: "Enzo", idade: 17, ira: 10100.3}];

pessoas.sort((a,b) => a.ira - b.ira);
console.log(pessoas);
pessoas.forEach(pessoa => console.log(pessoa.ira));

pessoas.sort((a,b) => a.nome.localeCompare(b.nome)); //organiza por nome crescente
console.log(pessoas);

pessoas.sort((a,b) => b.nome.localeCompare(a.nome)); //organiza por nome decrescente
console.log(pessoas);
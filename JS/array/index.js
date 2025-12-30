let frutas = ["banana", "laranja"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]); //Não fote o codigo inteiro 0o0

frutas[0] = "melão"
console.log(frutas[0]);

//ou

frutas.push("mamao") //coloca no fim
console.log(frutas);

frutas.pop(); //tira do inicio
console.log(frutas.pop()) //funciona pra retornar, crl muito mais facil doque o c kskakssk
console.log(frutas);

frutas.unshift("peçego"); //coloca no começo
console.log(frutas);

frutas.shift(); //Tira do começo
console.log(frutas);




console.log(frutas.length); //Tamanho;

console.log(frutas.indexOf("melão")); // -1 se n tem nada

frutas[3] = "mamaozao" //DA PRA FAZER ISSO WTF AKSKAKSA
console.log(frutas);

frutas = ["mamao", "zezão", "cascão", "maça"]; //podemos simplesmente reescrever o arrayfds o tamanho
console.log(frutas);

for(let fruta of frutas ){
    console.log(fruta); //funciona, que feliciadade jessus skskas
}

frutas.sort(); //QUE DELICIAAAAAAA (da pra falar de qual até qual);
console.log(frutas);

frutas.sort().reverse; //contrario
console.log(frutas);




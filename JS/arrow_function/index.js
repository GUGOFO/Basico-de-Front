const oi = function(){
    console.log("oi chefe");
}

oi();

//agora o arrow

const hello = () => console.log("oi lindo");

hello();

//agora com variaveis

const variaveis = (idade) => console.log(`tenho ${idade} de vida restante`);

variaveis(19);

//normalmente so usamos uma linha, porem podemos usar varias com parenteses

const linhas = () => {
    console.log("pinto");
    console.log("nada");
}

linhas();

//um ex de coisa util para se fazer com isso é deixar funcoes simples

const numeros = [1,2,3,4,5];

const quadrados = numeros.map((numeros) => Math.pow(numeros,2));
console.log(quadrados);
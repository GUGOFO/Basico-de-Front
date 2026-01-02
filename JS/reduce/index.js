const precos = [5,30,10,25,15,20];

const total = precos.reduce(soma);

function soma(total, elemento){
    return total + elemento;
}

console.log(`O total é R$${total}`);

//Bom pra medias tmb

const notas = [100,90,20,40,55,34,80];

const media = notas.reduce(soma)/notas.length;

console.log(media);

//otimo para achar o maximo e o minimo de um arrauy;

const minimo = notas.reduce(menor)

function menor(anterior, proximo){
    return Math.min(anterior,proximo);
}

console.log(minimo);
//map é basicaente um forEach porem ele retorna um NOVO arrau

const numeros = [1,2,3,4,5];
const quadrados = numeros.map(quadrado); //Criou o novo array

console.log(quadrados);
console.log(numeros);

function quadrado(elemento){
    return Math.pow(elemento,2);
}

// outro exemplos

const nomes = ["Gustavo", "Enzo", "Eduardo"];
const nomesMaiusculos = nomes.map(letraMaiuscula);
  
function letraMaiuscula(elemento){
    return elemento.toUpperCase();
}

console.log(nomes);
console.log(nomesMaiusculos);
console.log(nomes);

//exemplos legais

const datas = ["2024-1-13", "2025-6-20", "2022-1-21"]
const datasFormatadas = datas.map(formatacao);

function formatacao(elemento){
    const partes = elemento.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

console.log(datas)
console.log(datasFormatadas)
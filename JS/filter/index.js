//Filtros são utilizados com funções boolianas

const numeros = [1,2,3,4,5,6,7];
let numerosPares = numeros.filter(ehPar);

console.log(numerosPares);

function ehPar(elemento){
    return elemento % 2 === 0;
}
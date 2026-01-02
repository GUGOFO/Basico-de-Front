let numero = [1,2,3,4,5];

numero.forEach(dobrar); //acionou todos esses index para a função

numero.forEach(mostre); //printou cada index

function dobrar(elemento, index, array){ //incrivel que ja passa todos esses elementos, tem q ser nessa ordem
    array[index] = elemento * 2;
}

function mostre(elemento){ //tambem pode so passar o elemento em si, ele inteligentemente vai falar qual é
    console.log(elemento);
}

//outro ex aqui

let frutas = ["maca", "banana", "limao"];

frutas.forEach(letraMaiuscula);
frutas.forEach(print);

function letraMaiuscula(elemento, index, array){
    array[index] = elemento.toUpperCase();
}

function print(elemento){
    console.log(elemento);
}
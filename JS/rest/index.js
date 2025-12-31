//Rest é o contraerio do spread
//ao invez de separar ele junta os elementos em um unico array

function abrirGeladeira(...comidas){ //aq é o rest
    console.log(...comidas); //aq é o spreed
}

function getComidas(...comidas){
    return comidas
}


const comida1 = "pizza"
const comida2 = "alho"
const comida3 = "batata"
const comida4 = "bosta"

abrirGeladeira(comida1,comida2,comida3,comida4,"cu de curioso");

const comidas = getComidas(comida1,comida2,comida3,comida4);
console.log(comidas);

 
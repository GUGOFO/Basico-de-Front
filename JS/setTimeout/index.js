//N é muito bom para tempos exatos, é uma aproximação

function faleOi(){
    console.log("Eu sou gay e esperei 3 segundos por isso");
}

setTimeout(faleOi, 3000);

setTimeout(() => console.log("Eu sou gay e esperei 5 segundos por isso"), 5000);

//Tambem podemos cancelar ela

const timeout= setTimeout(() => console.log("haha perdeu"), 1000) //acionaria em 1 seg
clearTimeout(timeout); //cancelei imediatamente

//Outro exemplo melhir

let timeoutId;

function comecar(){
    timeoutId = setTimeout(() => console.log("URUU"), 4000);
    console.log("Comecou :)")
}

function cancelar(){
    clearTimeout(timeoutId);
    console.log("Cancelou :(")
}
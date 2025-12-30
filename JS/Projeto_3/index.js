const h2 = document.getElementById("resultado");
let is_celsius = true;

document.getElementById("btn-Celsius").onclick = function(){
    is_celsius = true;
}

document.getElementById("btn-Fehrenheit").onclick = function(){
    is_celsius = false;
}

document.getElementById("btn-enviar").onclick = function(){

    let graus = document.getElementById("caixa_de_texto").value;
    let resultado;

    if(is_celsius){
        resultado = (graus * 9/5) + 32;
        h2.textContent = resultado;
    }

    else{
        resultado = (graus - 32) * 5/9;
        h2.textContent = resultado;
    }
}
const num = document.getElementById("numero");
const btn_diminuir = document.getElementById("botao_de_diminuir");
const btn_reset = document.getElementById("botao_de_resetar");
const btn_aumentar = document.getElementById("botao_de_aumentar");
let numero = 0;

btn_diminuir.onclick = function(){
    numero--;
    num.textContent = numero;
}

btn_reset.onclick = function(){
    numero = 0;
    num.textContent = numero;
}

btn_aumentar.onclick = function(){
    numero++;
    num.textContent = numero;
}
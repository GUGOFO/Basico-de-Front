const checkbox = document.getElementById("checkbox");
const inferno_btn = document.getElementById("inferno_btn");
const hell_btn = document.getElementById("hell_btn");
const infiernito_btn = document.getElementById("infiernito_btn");
const envio_btn = document.getElementById("btn_envio");
const aceitou_resuldado = document.getElementById("aceitou_resuldado");
const lugar_resultado = document.getElementById("lugar_resultado");

envio_btn.onclick = function(){
    if(checkbox.checked) aceitou_resuldado.textContent = "Voce vendeu sua alma com sucesso <3";
    else aceitou_resuldado.textContent = "Voce n vendeu sua alma :(";

    if(inferno_btn.checked) lugar_resultado.textContent = "Voce vai pro inferno";
    else if(hell_btn.checked) lugar_resultado.textContent = "Voce vai pro HELL";
    else if(infiernito_btn.checked) lugar_resultado.textContent = "Voce vai pro infiernito";
    else lugar_resultado.textContent = "Voce tem q colocar um lugar pra ir";
}


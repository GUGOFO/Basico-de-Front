const btn_gambling = document.getElementById("gamblin-button");
const resultado = document.getElementById("resultado");

const maior_resultado = 6;
const menor_resultado = 1;

btn_gambling.onclick = function(){
    resultado.textContent = Math.floor(Math.random() * maior_resultado) + menor_resultado;
}
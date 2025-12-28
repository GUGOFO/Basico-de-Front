const PI = 3.14159;
let raio;
let circunferencia;

document.getElementById("botao_usuario").onclick = function(){
    raio = document.getElementById("resposta_do_usuario").value;
    raio = Number(raio);
    circunferencia = 2 * PI * raio;
    document.getElementById("resultado").textContent = circunferencia + "cm";
}
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

botao.addEventListener("click", evento => {
    caixa.style.backgroundColor = "red";
    caixa.textContent = "AIAI PORRA ;-;";
});

botao.addEventListener("mouseover", evento => {
    caixa.style.backgroundColor = "yellow";
    caixa.textContent = "Faz isso n ;(";
})

botao.addEventListener("mouseout", evento => {
    caixa.style.backgroundColor = "lawngreen";
    caixa.textContent = "Clica aqui 0o0";
})
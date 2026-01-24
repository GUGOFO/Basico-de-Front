const btnCara = document.getElementById("cara");
const btnCoroa = document.getElementById("coroa");
const dinheiro = document.getElementById("dinheiro");

function flip(chute){
    let valor = Number(dinheiro.textContent);
    let resultado = Math.floor(Math.random() * 2);
    if(chute == resultado) valor = valor * 2
    else valor = valor / 2;

    dinheiro.textContent = valor;
}

btnCara.onclick = () => flip(1);
btnCoroa.onclick = () => flip(0);
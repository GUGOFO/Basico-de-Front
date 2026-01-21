const enviado = document.getElementById("enviado");
const listaDeIcones = document.getElementsByClassName("iconeIndividual");
const containerIcones = document.getElementById("icones");
const botaoAdd = document.querySelector(".iconeadd");

enviado.onclick = function() {
    const pesquisa = document.getElementById("boxPesquisa").value;
    window.open(`https://www.${pesquisa.toLowerCase()}.com`);
}

function aoClicarNoIcone() {
    const labelAlvo = this.querySelector("label");
    const nomeDoSite = labelAlvo.innerText;
    console.log("Você clicou em: " + nomeDoSite); //preguiça de fazer o resto mskaksask
}

for (let icone of listaDeIcones) {
    icone.onclick = aoClicarNoIcone;
}

botaoAdd.onclick = function() {
    const iconeOriginal = listaDeIcones[0];
    const novoIcone = iconeOriginal.cloneNode(true);
    novoIcone.onclick = aoClicarNoIcone;
    containerIcones.insertBefore(novoIcone, botaoAdd);
}
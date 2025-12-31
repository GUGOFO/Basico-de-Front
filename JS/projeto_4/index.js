function roleOsDados(){
    const numDeDados = document.getElementById("numDeDados").value;
    const resultadoDeDados = document.getElementById("resultado");
    const imagensDeDados = document.getElementById("imagens");
    const valores = [];
    const imagens = [];

    for(let i = 0; i < numDeDados; i++){
        const valor = Math.floor(Math.random() * 6) + 1;
        valores.push(valor);
        imagens.push(`<img src="img/lado_${valor}.png" alt="Dado ${valor}">`);
    }

    resultadoDeDados.textContent = `dado: ${valores.join(`, `)}`;
    imagensDeDados.innerHTML = imagens.join(``);
}
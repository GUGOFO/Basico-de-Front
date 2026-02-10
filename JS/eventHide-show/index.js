const botao = document.getElementById("botao")
const imagem = document.getElementById("imagem")

botao.addEventListener("click", event => {
    if(imagem.style.visibility === "hidden"){
        imagem.style.visibility = "visible";
        botao.textContent = "Faça-o SUMIR hahaha";
    }
    else{
        //imagem.style.display = "none"; //Ira sumir, incluindo o lugar onde ficava
        imagem.style.visibility = "hidden"; //so desaparece, porem ainda esta la
        botao.textContent = "FAZ VOLTAR PFV";
    }
})
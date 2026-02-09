
// PRIMEIRO: Criar elemento

const novoH1 = document.createElement("h1")

// SEGUNDO: Adicionar atributos

novoH1.textContent = "Eu amo PIZZAA"; 
novoH1.id = "meuH1"
novoH1.style.textAlign = "center";

// TERCEIRO: Colocar elemento no DOM

//document.body.prepend(novoH1); //COMEÇO
//document.body.append(novoH1);   //FINAL
document.getElementById("caixa1").append(novoH1) //dentro da caixa1

//const caixa2 = document.getElementById("caixa2");
//document.body.insertBefore(novoH1,caixa2);

//const caixas = document.querySelectorAll(".caixa");
//document.body.insertBefore(novoH1,caixas[2]);

// QUARTO: Remover elemento do HTML

//document.body.removeChild(novoH1)
document.getElementById("caixa1").removeChild(novoH1)
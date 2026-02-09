// PRIMEIRO: Criar elemento

const novoItemNaLista = document.createElement("li");

// SEGUNDO: Adicionar atributos

novoItemNaLista.textContent = "coco";
novoItemNaLista.id = "coco";
novoItemNaLista.style.backgroundColor = "brown";
novoItemNaLista.style.fontWeight = "bold";

// TERCEIRO: Colocar elemento no DOM

//document.getElementById("frutas").append(novoItemNaLista);

//const laranja = document.getElementById("laranja");
//document.getElementById("frutas").insertBefore(novoItemNaLista, laranja);

const itensDaLista = document.querySelectorAll("#frutas li");
document.getElementById("frutas").insertBefore(novoItemNaLista, itensDaLista[-1])

// QUARTO: Remover elemento do HTML

document.getElementById("frutas").removeChild(novoItemNaLista);
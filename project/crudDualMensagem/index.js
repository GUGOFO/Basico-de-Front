const divConversas = document.getElementById("divConversas");
const recebedorInput = document.getElementById("divRecebedorInput");
const enviadorInput = document.getElementById("divEnviadorInput");

recebedorInput.addEventListener("submit", e => {
    e.preventDefault();

    const texto = recebedorInput.children[0].value;
    if(texto.trimStart() !== ""){
        divConversas.innerHTML += `<div class="recebidorMsg">${texto}</div>`
        recebedorInput.children[0].value = ''
    }
    else recebedorInput.children[0].value = ''
    
})

enviadorInput.addEventListener("submit", e => {
    e.preventDefault();

    const texto = enviadorInput.children[0].value;
    if(texto.trimStart() !== ""){
        divConversas.innerHTML += `<div class="enviadorMsg">${texto}</div>`
        enviadorInput.children[0].value = ''
    }
    else enviadorInput.children[0].value = ''
    
})
const btnAdd = document.querySelector(".btnAdicionar");
const divEscondida = document.getElementById("divEscondida");
const form = document.getElementById("divAddCard");
const inputTitulo = document.getElementById("inputTitulo");
const inpuutTexto = document.getElementById("inpuutTexto");

let ultimoId = 0;
getNotesCriação();

async function getNotesCriação(){
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        if(!resposta.ok) throw new Error("getNotes n ta OK");
        const dados = await resposta.json();

        for(const dado of dados){
            const { body: texto, title: titulo, id: id} = dado
            ultimoId++;
            
            criarElemento(id, titulo, texto);
        }
    }
    catch(error){
        console.error(`Erro no GetNotesCriacao -> ${error}`);
    }
}

btnAdd.addEventListener("click", () => divEscondida.style.display = "flex");

form.addEventListener("submit", async elemento => {
    elemento.preventDefault()
    try{
        const titulo = inputTitulo.value;
        const texto = inpuutTexto.value;
        ultimoId++;

        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                userId: ultimoId,
                title: titulo,
                body: texto
            })
        })
        if(!resposta.ok) throw new Error("deu ruim quando postou")
        
        criarElemento(ultimoId, titulo, texto);
        divEscondida.style.display = "none";
        
    }
    catch(error){
        console.log(error)
        ultimoId--;
        divEscondida.style.display = "none";
    }
})

async function criarElemento(id, titulo, texto){
    const divCard = document.createElement("div");
    const divId = document.createElement("div");
    const divTexto = document.createElement("div");
    const tituloHtml = document.createElement("h1");
    const textoHtml = document.createElement("p");
    const btnDeletar = document.createElement("div");

    divCard.classList.add("divCard");
    divId.classList.add("divId");
    divTexto.classList.add("divTexto");
    tituloHtml.classList.add("titulo");
    textoHtml.classList.add("texto");
    btnDeletar.classList.add("btnDeletar");

    divId.textContent = `#${id}`;
    tituloHtml.textContent = `${titulo}`;
    textoHtml.textContent = `${texto}`;
    btnDeletar.textContent = "Delete";

    document.body.appendChild(divCard);
    divCard.appendChild(divId)
    divCard.appendChild(divTexto)
    divTexto.appendChild(tituloHtml)
    divTexto.appendChild(textoHtml)
    divCard.appendChild(btnDeletar)

    btnDeletar.addEventListener("click", async elemento => {
                const btn = elemento.target;
                try{

                    btn.textContent = "Deletando...";
    
                    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                        method: "DELETE"
                    })
                    if(!resposta.ok) throw new Error("resposta n ok")
                    
                    btn.parentElement.remove();
                }
                catch(error){
                    console.error(error);
                    btn.textContent = "Error";
                }
            })
}


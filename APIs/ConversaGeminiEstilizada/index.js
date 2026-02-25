const form = document.getElementById("form");
const inputTexto = document.getElementById("inputTexto");
const btnSubmit = document.getElementById("btnSubmit");
const textoNada = document.getElementById("textoNada");
const chatContainer = document.getElementById("chatContainer")
const tituloTemporario = document.getElementById("tituloTemporario");
let historicoDeConversas = [];

const geminiKey = "SUA-CHAVE-AQUI"; 
const modelo = "gemini-2.5-flash";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`;

form.addEventListener("submit", async evento => {
    evento.preventDefault();

    tituloTemporario.style.display = "none";
    chatContainer.style.display = "flex";

    const textoUsuario = inputTexto.value
    if (textoUsuario.trim() === "") {
        textoNada.style.display = "flex"
        return
    }
    else textoNada.style.display = "none"
    
    inputTexto.disabled = true
    btnSubmit.disabled = true
    
    historicoDeConversas.push({
        role: "user",
        parts: [{ text: inputTexto.value }]
    })
    
    displayMensagem(inputTexto.value, "divUsuario");
    inputTexto.value = "";

    try{
        const resposta = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: historicoDeConversas
            })
        });

        if(!resposta.ok) throw new Error(resposta.status)
        
        const dados = await resposta.json();
        const respostaDaIA = dados.candidates[0].content.parts[0].text;

        console.log(respostaDaIA)

        historicoDeConversas.push({
            role: "model",
            parts: [{ text: respostaDaIA }]
        })

        displayMensagem(respostaDaIA, "divChat")
    }
    catch(error){
        console.error(error);
        const msgDeErro = `Ocorreu um erro... aqui está ele: ${error}`;
        displayMensagem(msgDeErro, "divError");
        historicoDeConversas.pop();
        inputTexto.value = textoUsuario;
    }
    finally{
        inputTexto.disabled = false
        btnSubmit.disabled = false
    }
});

function displayMensagem(mensagem, clase){
    const div = document.createElement("div");
    const texto = document.createElement("p");

    div.classList.add(clase);

    texto.textContent = mensagem;

    div.append(texto);
    chatContainer.append(div);
}
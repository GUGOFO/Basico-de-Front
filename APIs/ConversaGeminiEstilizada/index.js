const form = document.getElementById("form");
const inputTexto = document.getElementById("inputTexto");
const btnSubmit = document.getElementById("btnSubmit");
const textoNada = document.getElementById("textoNada");
let historicoDeConversas = [];

const geminiKey = "AIzaSyAr24hrbUly7wFK90a2TGhl_gJTM9nYsN8"; 
const modelo = "gemini-2.0-flash-lite";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`;

form.addEventListener("submit", async evento => {
    evento.preventDefault();

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
    
            inputTexto.disabled = true
            btnSubmit.disabled = true
    }
    catch(error){
        console.error(error);
    }
})
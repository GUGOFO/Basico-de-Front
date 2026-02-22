const form = document.getElementById("form");
const inputTexto = document.getElementById("inputTexto");
const btnSubmit = document.getElementById("btnSubmit");
const textoNada = document.getElementById("textoNada");
let historicoDeConversas = [];

const geminiKey = "SUA API AQUI SEU LINDO"; 
const modelo = "gemini-2.5-flash";
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
        console.log(dados.candidates[0].content.parts[0].text)
    }
    catch(error){
        console.error(error);
    }
})
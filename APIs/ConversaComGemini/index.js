const form = document.getElementById("form");
const inputUsuario = document.getElementById("input");

const geminiKey = "SUA CHAVINHA DO GEMINI"; 
const modelo = "gemini-2.5-flash";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`

let historicoDeConversas = [];

form.addEventListener("submit", async btn => {
    btn.preventDefault();

    const textoUsuario = inputUsuario.value;
    inputUsuario.value = "";

    historicoDeConversas.push({
        role: "user",
        parts: [{ text: textoUsuario }]
    })

    try{
        const resposta = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                contents: historicoDeConversas
            })
        })

        if(!resposta.ok) throw new Error(resposta.status)
        
        const dados = await resposta.json();
        
        const respostaDaIa = dados.candidates[0].content.parts[0].text;

        console.log(respostaDaIa);

        historicoDeConversas.push({
            role: "model",
            parts: [{ text: respostaDaIa }]
        })
    }
    catch(error){
        console.error(error);
        historicoDeConversas.pop()
    }
    
})
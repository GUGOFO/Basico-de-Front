const geminiKey = "SUA API KEY AQUI"; 
const modelo = "gemini-2.5-flash"

async function postGemini(){
    try{
        const resposta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "contents": [{
                    "parts": [{
                        "text": "Me fale sobre seu dia em poucas palavras"
                    }]}]
            })
        });
        if(!resposta.ok) throw new Error(resposta.status);

        const dados = await resposta.json();

        const respostaDaIa = dados.candidates[0].content.parts[0].text;

        console.log(respostaDaIa)

    }
    catch(error){
        console.log(error);
    }
}
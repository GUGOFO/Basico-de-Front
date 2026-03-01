
const form = document.getElementById("divGerador")
const btn = document.getElementById("inputDoUsuario")

const geminiKey = ""; 
const modelo = "gemini-2.5-flash";
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent?key=${geminiKey}`;

form.addEventListener("submit", async e => {
    try{
        e.preventDefault()
        btn.disabled = true;
        btn.value = "carregando..."
        
        const personalidade = `Voce é uma maquina feita para dar UMA IDEIA de novo projeto para 
                               um aluno de engenharia de software que esta 
                               aprendendo: REACT, 
                               ele esta em um nivel iniciante / moderado
                                
                               Não é necessário ter detalhes, quero que voce retorne o titulo da ideia seguido por POUCAS especificações de dsine (NO MAXIMO UM PARAGRAFO SEM ENROLAÇÃO)`
    
        console.log("odido")
        
        const resposta = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                systemInstruction: { parts: [{ text: personalidade }]},
                "contents": [{
                    "parts": [{
                        "text": "Me de uma nova ideia"
                    }]}]
            })
        });
        if(!resposta.ok) throw new Error("deu ruim quando postou")
    
        const dados = await resposta.json();
        const respostaDaIA = dados.candidates[0].content.parts[0].text;


        mostrarMsg("respostaDaIa", respostaDaIA)
    
        console.log(respostaDaIA)
    }
    catch(error){
        console.error(error)
        console.log("oi")
        mostrarMsg("error", "DEU MERDA MAN \nOLHA O CONSOLE AGORA")
    }
    finally{
        btn.disabled = false;
        btn.value = "GERE IDEIAS ESCRAVO!!"
    }
});

function mostrarMsg(id, mensagem){
    const container = document.createElement("div");
    
    container.id = id
    
    id == "error" ? container.textContent = mensagem : container.innerHTML = marked.parse(mensagem);
    form.appendChild(container)
}
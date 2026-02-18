const url = "https://jsonplaceholder.typicode.com/posts/1";

async function putDados(){
    try{
        const resposta = await fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                id: 1,
                title: "Trocando elemento",
                body: "Elemento 1 foi trocado para o elemento 999",
                userId: 999
            })
        })

        if(!resposta.ok) throw new Error("Deu merda no put")
        
        const dados = await resposta.json()
        console.log(dados)
    }
    catch(error){
        console.error(error)
    }
}

putDados()
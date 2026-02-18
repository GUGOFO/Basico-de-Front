const url = "https://jsonplaceholder.typicode.com/posts/1";

async function patchDados(){
    try{
        const resposta = await fetch(url, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                title: "Titulo 100% atualizado uau"
            })
        })
    
        if(!resposta.ok) throw new Error("Resposta n ok");
        const dados = await resposta.json();
        console.log(dados);
    }
    catch(error){
        console.error(error);
    }
}

patchDados()
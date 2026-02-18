const url = "https://jsonplaceholder.typicode.com/posts";

//Voce cria um novo elemento, voce "POST"a ele la :) haha

async function postData(){
    try{
        const resposta = await fetch(url, {
            method: "POST",
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                title: "Novo Usuario",
                body: "Gustavo Gomes Fornaciari",
                userId:1
            })
        })
        if(!resposta.ok) throw new Error("deu ruim quando postou")

        const dados = await resposta.json();
        console.log(dados);
    }
    catch(error){
        console.error(error)
    }
}

postData()
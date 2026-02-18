const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

//Get é o que eu normalemnte uso, voce so recebe os dados do servidor

async function getNomes() {

    try{
        const resposta = await fetch(url);
        if(!resposta.ok) throw new Error("merd");
        const dados = await resposta.json()
        console.log(dados)
    }
    catch(error){
        console.error(error);
    }
}

getNomes()
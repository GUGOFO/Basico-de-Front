const url = "https://jsonplaceholder.typicode.com/posts/1"

async function deleteDado(){
    try{
        const resposta = await fetch(url, {
            method: "DELETE"
        });
        if(resposta.ok) console.log(resposta.ok);
    }
    catch(error){
        console.error(error);
    }
}

deleteDado()
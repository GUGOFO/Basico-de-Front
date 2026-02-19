
getNotes();

async function getNotes(){
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        if(!resposta.ok) throw new Error("getNotes n ta OK");
        const dados = await resposta.json();
        console.log(dados);
        
        for(const dado of dados){
            console.log(dado);
        }
    }
    catch(error){
        console.error(error);
    }
}

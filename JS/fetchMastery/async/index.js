const url = 'https://jsonplaceholder.typicode.com/users';

getDados()

async function getDados(){
    
    try{
        const resposta = await fetch(url);
        if(!resposta.ok) throw new Error("Não ta ok não");
        const dados = await resposta.json();
        console.log(dados);
    }
    catch(error){
        console.error(error)
    }

}
const url = 'https://jsonplaceholder.typicode.com/users';

getDados();

function getDados(){
    fetch(url)
        .then(resposta => {
            if(!resposta.ok) throw new Error("Resposta não valida");
            return resposta.json();
        })
        .then( dados => {
            console.log(dados);
        })
        .catch( error => {
            console.error(error)
        })
}
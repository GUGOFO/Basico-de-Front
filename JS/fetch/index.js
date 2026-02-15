fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(resposta => {

        if(!resposta.ok){
            throw new Error("não deu pra acessar")
        }
        return resposta.json();
      })
      .then(dado => console.log(dado))
      .catch(error => console.error(error));

//Tabmem podemos usar await

async function fetchData(){
    try{

        const pokemonNome = document.getElementById("pokemonName").value.toLocaleLowerCase()
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`)
    
        if(!resposta.ok){
            throw new Error("não deu para acessar o recurso")
        }
        
        const data = await resposta.json();
        const pokemonSprite = data.sprites.front_default;
        const imagemDoHtml = document.getElementById("sprite")

        imagemDoHtml.src = pokemonSprite;
        imagemDoHtml.style.display = "block"
        imagemDoHtml.style.height = "30vh"
    }
    catch(error){
        console.error(error)
    }

}
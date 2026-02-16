const apiKey = "1dc9cfcc44d079bb494bfb62c966473c";
const formHeroi = document.getElementById("superHeroiForm");
const divNomeHeroi = document.getElementById("inputSuperHeroName");
const divHerois = document.getElementById("DivHerois");


formHeroi.addEventListener("submit", async evento => {
    evento.preventDefault();
    
    const nomeHeroi = divNomeHeroi.value;
    
    if(nomeHeroi){
        try{
            const dados = await getDadosHeroi(nomeHeroi);
            const superHerois =  dados.results;
            if(superHerois === undefined) throw new Error("Não conseguimos acessar");
            else mostrarHerois(superHerois);
        }
        catch(error){
            console.log(error)
            divHerois.innerHTML = ""; 
        }
    }
    else{
        console.log("Nada aqui")
        divHerois.innerHTML = ""; 
    }
});

async function getDadosHeroi(nome){
    const apiUrl = `https://superheroapi.com/api.php/${apiKey}/search/${nome}`;
    const resposta = await fetch(apiUrl);
    if(!resposta.ok){
        throw new Error("Não conseguimos acessar");
    }
    return await resposta.json();
}

function mostrarHerois(superHerois){
    divHerois.innerHTML = ""; 

    superHerois.forEach(heroi => {

        const {name: nome,
               appearance: { gender: genero,
                             race: raca},
               biography : { alignment : ideal},
               image: { url: imgURL },
               powerstats } = heroi;

        console.log(`nome: ${nome}`)
        console.log(powerstats)
      
        const cardHeroi = document.createElement("div");
        cardHeroi.classList.add("divHeroi");

        const createImg = document.createElement("img");
        createImg.src = imgURL;     
        
        const divInfo = document.createElement("div"); 
        divInfo.classList.add("caracteristicas");

        // 4. Criar os textos
        const createNome = document.createElement("p");
        createNome.textContent = nome;
        createNome.classList.add("nome"); 

        const createIdeais = document.createElement("p");
        createIdeais.textContent = `Ideal: ${ideal}`;
        createIdeais.classList.add("ideais");

        const createGenero = document.createElement("p");
        createGenero.textContent = `Gênero: ${genero}`;
        createGenero.classList.add("genero");

        const createRaça = document.createElement("p");
        createRaça.textContent = `Raça: ${raca || "Desconhecida"}`;
        createRaça.classList.add("raça");

        divInfo.appendChild(createNome);
        divInfo.appendChild(createIdeais);
        divInfo.appendChild(createGenero);
        divInfo.appendChild(createRaça);
        cardHeroi.appendChild(createImg);
        cardHeroi.appendChild(divInfo);
        divHerois.appendChild(cardHeroi);
    });
}
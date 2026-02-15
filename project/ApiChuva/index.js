const tempoForm = document.querySelector(".tempoForm");
const cidadeInput = document.querySelector(".cidadeInput");
const card = document.querySelector(".card")
const apikey = "06a5c53984249c01116935a2656cacd3";

tempoForm.addEventListener("submit",async evento => {

    evento.preventDefault();

    const cidade = cidadeInput.value;

    if(cidade){
        try{
            const dados = await getDadoTempo(cidade);
            displayInformaçõesTempo(dados);
        }
        catch(erro){
            console.error(erro)
            displayError(erro)
        }
    }
    else{
        displayError("Coloque uma cidade")
    }
})

async function getDadoTempo(cidade) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&appid=${apikey}`

    const resposta = await fetch(apiUrl);
    
    if(!resposta.ok){
        throw new Error("Não conseguimos acessar")
    }
    return await resposta.json();
}

function displayInformaçõesTempo(data) {

    const {name: cidade,
           main: {temp, humidity},
           weather: [{description, id}]} = data;
        
    card.textContent = "";
    card.style.display = "flex";

    const cidadeDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidadeDisplay = document.createElement("p");
    const descriçãoDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cidadeDisplay.textContent = cidade;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
    humidadeDisplay.textContent = `Humidade: ${humidity}%`;
    descriçãoDisplay.textContent = description;
    emojiDisplay.textContent = getEmoji(id);

    cidadeDisplay.classList.add("displayCidade");
    tempDisplay.classList.add("displayTemperatura");
    humidadeDisplay.classList.add("displayHumidade");
    descriçãoDisplay.classList.add("descrição");
    emojiDisplay.classList.add("emoji");
    
    card.appendChild(cidadeDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidadeDisplay);
    card.appendChild(descriçãoDisplay);
    card.appendChild(emojiDisplay);

}

function getEmoji(id){
    switch(true){
        case(id >= 200 && id < 300):
            return "⛈️"
        case(id >= 300 && id < 400):
            return "🌧️"
        case(id >= 500 && id < 600):
            return "🌧️"
        case(id >= 600 && id < 700):
            return "❄️"
        case(id >= 700 && id < 800):
            return "🌫️"
            case(id === 800):
            return "☀️"
        case(id >= 801 && id < 810):
            return "☁️"
        default:
            return "❓"
    }
}

function displayError(erro){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = erro;
    errorDisplay.classList.add("displayErro")

    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)
    
}
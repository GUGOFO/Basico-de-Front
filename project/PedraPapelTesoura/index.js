const possiveisEscolhas = ["pedra", "papel", "tesoura"];
const displayPlayerEscolha = document.getElementById("escolhaPlayer");
const displayComputadorEscolha = document.getElementById("escolhaComputador");
const resultado = document.getElementById("resultado");
const displayPlayerScore = document.getElementById("vitoriasPlayer");
const displayComputadorScore = document.getElementById("vitoriasMaquina");
let vitoriasPlayer = 0;
let vitoriasComputador = 0;


function jogo(escolhaDoPlayer){
    let escolhaComputador = possiveisEscolhas[Math.floor(Math.random() * 3)];
    displayPlayerEscolha.textContent = `Player: ${escolhaDoPlayer}`;
    displayComputadorEscolha.textContent = `Computador: ${escolhaComputador}`;

    if(escolhaDoPlayer == "pedra"){
        if(escolhaComputador == "pedra") empate();
        if(escolhaComputador == "papel") computadorGanha();
        if(escolhaComputador == "tesoura") playerGanha();
    }
    else if(escolhaDoPlayer == "papel"){
        if(escolhaComputador == "pedra") playerGanha();
        if(escolhaComputador == "papel") empate();
        if(escolhaComputador == "tesoura") computadorGanha();
    }
    else if(escolhaDoPlayer == "tesoura"){
        if(escolhaComputador == "pedra") computadorGanha();
        if(escolhaComputador == "papel") playerGanha();
        if(escolhaComputador == "tesoura") empate();
    }
}

function empate(){
    resultado.innerText = "EMPATEEE!!!!!";
}

function computadorGanha(){
    resultado.innerText = "Computador ganha!!!!!";
    vitoriasComputador++;
    displayComputadorScore.innerHTML = `Computador score: <span style="color: red;">${vitoriasComputador}</span>`;
}

function playerGanha(){   
    resultado.innerText = "Player ganha!!!!!";
    vitoriasPlayer++;
    displayPlayerScore.innerHTML = `Player score: <span style="color: green;">${vitoriasPlayer}</span>`;
}
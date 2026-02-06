const tempo = document.getElementById("tempo");
let timer = null;
let startTime = 0;
let tempoPassado = 0;
let estaFuntionando = false;

function start(){

    if(!estaFuntionando){
        startTime = Date.now() - tempoPassado;
        timer = setInterval(update, 10);
        estaFuntionando = true;
    }
}

function stop(){

    if(estaFuntionando){
        clearInterval(timer);
        tempoPassado = Date.now() - startTime;
        estaFuntionando = false;
    }
}

function reset(){
    clearInterval(timer)
    startTime = 0;
    tempoPassado = 0;
    estaFuntionando = false;
    tempo.textContent = "00:00:00:00"
}

function update(){
    const tempoAtual = Date.now();
    tempoPassado = tempoAtual - startTime;

    let horas = Math.floor(tempoPassado / (1000 * 60 * 60));
    let minutos = Math.floor(tempoPassado / (1000 * 60) % 60);
    let segundos = Math.floor(tempoPassado / 1000 % 60);
    let milisegundos = Math.floor(tempoPassado % 1000 / 10);

    horas = String(horas).padStart(2,"0");
    minutos = String(minutos).padStart(2,"0");
    segundos = String(segundos).padStart(2,"0");
    milisegundos = String(milisegundos).padStart(2,"0");

    tempo.textContent = `${horas}:${minutos}:${segundos}:${milisegundos}`;

}

const caixa = document.getElementById("caixa");
const quantidadeDeMovimento = 10;
let x = 0
let y = 0

document.addEventListener("keydown", event => {

    event.preventDefault();

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= quantidadeDeMovimento;
                break;
            case "ArrowDown":
                y += quantidadeDeMovimento;
                break;
            case "ArrowLeft":
                x -= quantidadeDeMovimento;
                break;
            case "ArrowRight":
                x += quantidadeDeMovimento;
                break;
        }

        caixa.style.top = `${y}px`;
        caixa.style.left = `${x}px`;
    }

    caixa.textContent = "WoW";
    caixa.style.backgroundColor = "purple";
})

document.addEventListener("keyup", event => {
    caixa.textContent = "0o0";
    caixa.style.backgroundColor = "aqua";
})


let botoes = document.querySelectorAll(".botoes");

//add elemento:

const novoBotao = document.createElement("button");

novoBotao.textContent = "botão 5";
novoBotao.classList = "botoes";

document.body.appendChild(novoBotao);

botoes = document.querySelectorAll(".botoes");

//Fazer coisas com ele

botoes.forEach(botao => {
    botao.addEventListener("mouseover", evento => {
        evento.target.style.backgroundColor = "blue";
    })
})

botoes.forEach(botao => {
    botao.addEventListener("mouseout", evento => {
        evento.target.style.backgroundColor = "lightskyblue";
    })
})

//remover

botoes.forEach(botao => {
    botao.addEventListener("click", evento => {
        evento.target.remove(); //removi do HTML, porem ainda ta aq
        botoes = document.querySelectorAll(".botoes");
        console.log(botoes)
    })
})
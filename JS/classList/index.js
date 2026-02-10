const botao = document.getElementById("botao") 
const botao2 = document.getElementById("botao2") 
const h1 = document.getElementById("h1") 

botao.classList.add("ativo")
botao.classList.remove("ativo")

botao.addEventListener("mouseover", evento => {
    evento.target.classList.add("hover");
    // evento.target.classList.toggle("hover"); Remove se esta presente, adiciona caso n esteja
})

botao.addEventListener("mouseout", evento => {
    evento.target.classList.remove("hover");
})

botao2.classList.add("ativo");

botao2.addEventListener("click", evento => {
    evento.target.classList.replace("ativo", "disabilitado");
})

h1.classList.add("ativo")
h1.classList.add("hover");

//da pra colocar varias classes

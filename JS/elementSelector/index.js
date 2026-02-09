//getElementById (O melhor de todos proprio jesus cristo)

const meuHead = document.getElementById("headding");

meuHead.style.backgroundColor = "blue";
meuHead.style.textAlign = "center";

console.log(meuHead);

//getElementsByClassName (Funciona como se fosse um array, porem n é)

const frutas = document.getElementsByClassName("fruta");
console.log(frutas);

frutas[1].style.backgroundColor = "yellow";

for(let fruta of frutas){
    fruta.style.backgroundColor = "yellow";
}

Array.from(frutas).forEach(fruta => {
    fruta.style.textAlign = "center";
});

//getElementsByTagName (msm coisa do ultimo)

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements)
const liElements = document.getElementsByTagName("li");
console.log(liElements)

for(let h4elemento of h4Elements){
    h4elemento.style.color = "blue";
}

for(let lielemento of liElements){
    lielemento.style.color = "red";
}

//querySelector (Retorna o primeiro elemento q achar ou NULL)

const elemento = document.querySelector(".fruta");
console.log(elemento);

elemento.style.color = "blue";

//querySelectorALL (Volta como um node, tem mais funcionalidades q os outros)

const frutas1 = document.querySelectorAll(".fruta");
console.log(frutas1);

frutas1.forEach(fruta => {
    fruta.style.backgroundColor = "green"
})




//Melhor "combo" seria o getElementById() e o querySelectorALL()
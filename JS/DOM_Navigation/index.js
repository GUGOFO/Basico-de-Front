// .firstElementChild

const frutas = document.getElementById("frutas");
const primeiroElemento = frutas.firstElementChild;

primeiroElemento.style.backgroundColor = "yellow"

const ulElementos = document.querySelectorAll("ul");

ulElementos.forEach(elementos => {
    const primeiroElemento = elementos.firstElementChild;
    primeiroElemento.style.color = "red";
})

// .lastElementChild

const ultimoElemento = document.getElementById("frutas").lastElementChild
ultimoElemento.style.backgroundColor = "pink"   //funciona o foreach se usar o query

// .nextElementSiblin

const individuo = document.getElementById("chevrolet"); //Se selecionar uma UL por exemplo a proxima UL vai ser pega
const irmao = individuo.nextElementSibling;
irmao.style.backgroundColor = "green"

//  .previousElementSiblin

const irmaoDeTras = irmao.previousElementSibling;
irmaoDeTras.style.backgroundColor = "grey"

// .parentElement

const iphone = document.getElementById("iphone");
const celualres = iphone.parentElement;

celualres.style.backgroundColor = "blue"

// .children

const carros = document.getElementById("carros");
const carrosIndividuais = carros.children;

console.log(carrosIndividuais); //Uma coleção HTML... paia, bom transformar em array, mas vc ainda pode usar um index

Array.from(carrosIndividuais).forEach(carro => {
    carro.style.backgroundColor = "purple"
})

carrosIndividuais[1].style.backgroundColor = "red"
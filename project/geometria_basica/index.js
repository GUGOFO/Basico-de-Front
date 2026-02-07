let ehCirculo = true;
let ehQuadrado = false;
let ehTriangulo = false;
const areaDaImagem = document.getElementById("area");
const perimetroDaImagem = document.getElementById("perimetro");

function calcular(){
    const tamanho = document.getElementById("numero").value;

    if(ehCirculo) calcularCirculo(tamanho);
    else if(ehQuadrado) calcularQuadrado(tamanho);
    else calcularTriangulo(tamanho);
}

function calcularCirculo(raio){
    const area = Math.PI * raio;
    const perimetro = 2 * Math.PI * raio;

    areaDaImagem.textContent = `Area: ${area.toFixed(2)}cm`;
    perimetroDaImagem.textContent = `Perimetro: ${perimetro.toFixed(2)}cm`;
}

function calcularQuadrado(lado){
    const area = lado * lado;
    const perimetro = lado * 4;

    areaDaImagem.textContent = `Area: ${area.toFixed(2)}cm`;
    perimetroDaImagem.textContent = `Perimetro: ${perimetro.toFixed(2)}cm`;
}

function calcularTriangulo(lado){
    const area = lado * lado * Math.sqrt(3) / 4;
    const perimetro = lado * 3;
    
    areaDaImagem.textContent = `Area: ${area.toFixed(2)}cm`;
    perimetroDaImagem.textContent = `Perimetro: ${perimetro.toFixed(2)}cm`;
}



function trocaPequena1(){
    const containerGrande = document.getElementById("containerFormaGrande");
    const containerPequena = document.getElementById("containerFormaPequena1");

    let grandeID = containerGrande.firstElementChild.id;
    let pequenoID = containerPequena.firstElementChild.id;
    
    grandeID = grandeID.slice(0,grandeID.indexOf("G"));
    pequenoID = pequenoID.slice(0,pequenoID.indexOf("P"));

    containerGrande.innerHTML = `<div id="${pequenoID}Grande"></div>`;
    containerPequena.innerHTML = `<div id="${grandeID}Pequeno"></div>`;

    ehCirculo = false; ehQuadrado = false; ehTriangulo = false;
    if(pequenoID == "circulo") ehCirculo = true;
    else if(pequenoID == "quadrado") ehQuadrado = true;
    else if(pequenoID == "triangulo") ehTriangulo = true;

    calcular();
}

function trocaPequena2(){
    const containerGrande = document.getElementById("containerFormaGrande");
    const containerPequena = document.getElementById("containerFormaPequena2");

    let grandeID = containerGrande.firstElementChild.id;
    let pequenoID = containerPequena.firstElementChild.id;
    
    grandeID = grandeID.slice(0,grandeID.indexOf("G"));
    pequenoID = pequenoID.slice(0,pequenoID.indexOf("P"));

    containerGrande.innerHTML = `<div id="${pequenoID}Grande"></div>`;
    containerPequena.innerHTML = `<div id="${grandeID}Pequeno"></div>`;

    ehCirculo = false; ehQuadrado = false; ehTriangulo = false;
    if(pequenoID == "circulo") ehCirculo = true;
    else if(pequenoID == "quadrado") ehQuadrado = true;
    else if(pequenoID == "triangulo") ehTriangulo = true;

    calcular();
}
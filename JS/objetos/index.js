const pessoa1 = {
    primeiroNome: "BobEspoja",
    sobrenome:"calçasQuadradas",
    idade: 60,
    trabalhando: true,
    darOi: function() {console.log("oi")},
}
const pessoa2 = {
    primeiroNome: "Patrique",
    sobrenome:"Estrela",
    idade: 18,
    trabalhando: false,
    darOi: () => console.log("buga buga"), //sou chique
}

console.log(pessoa1.primeiroNome); //funciona com todos, preguiça skaks
console.log(pessoa2.primeiroNome); //funciona com todos, preguiça skaks

pessoa1.darOi();
pessoa2.darOi();
//jeito macaco
/*
let usarname = window.prompt("Qual seu nome macaco?");
console.log(usarname);
*/
//jeito FODA POGGERS

let nome_de_usuario

document.getElementById("myMandar").onclick = function(){
    nome_de_usuario = document.getElementById("myText").value;
    document.getElementById("nome").textContent = `oi ${nome_de_usuario}`;
}
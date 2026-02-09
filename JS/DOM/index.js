document.title = "Meu Site";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"

console.log(document);

const usarName = "GUGOFO";
const msgOiParaUsuario = document.getElementById("MensagemOi");

msgOiParaUsuario.textContent += usarName === "" ? 'Niguem' : usarName;

//DOM é o documento, basicamente o HTML q temos, usamos bastante ele, um ex é como usamos acima
//Nos meus projetos ja é usado isso bastante, ent da pra ver q é bem basic akskkas
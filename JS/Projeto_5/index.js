const tamanhoSenha = 12;
const incluirLetraMinuscula = true;
const incluirLetraMaiuscula = true;
const incluirNumeros = true;
const incluirSimbulos = true;

function gerarSenha(tamanho, incluirLetraMinuscula, incluirLetraMaiuscula, incluirNumeros, incluirSimbulos){

    const letrasMinusculas = "abcdefghijklmnopqrstuvwxiz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbulos = "!@#$%+-&*";

    let caracteresPermitidos = "";
    let senha = "";

    caracteresPermitidos += incluirLetraMinuscula ? letrasMinusculas : "";
    caracteresPermitidos += incluirLetraMaiuscula ? letrasMaiusculas : "";
    caracteresPermitidos += incluirNumeros ? numeros : "";
    caracteresPermitidos += incluirSimbulos ? simbulos : "";

    console.log(caracteresPermitidos);

    for(let i = 0; i < tamanho; i++){
        const indexAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[indexAleatorio];
    }

    return senha;
}

const senha = gerarSenha(tamanhoSenha,
                         incluirLetraMinuscula, 
                         incluirLetraMaiuscula, 
                         incluirNumeros, 
                         incluirSimbulos);

console.log(`senha gerada: ${senha}`);
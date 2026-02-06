//Basicamente objetos dentro de objetos

const pessoa = {
    nomeInteiro: "Gustavo Gomes Fornaciari",
    idade: 19,
    ehEstudante: true,
    hobbies: ["codar", "jogar", "namorar minha linda namorada"],
    endereco: {
        rua: "Elzira Sammarco Palma 405",
        cidade: "Ribeirão Preto",
        pais: "Brasil",
    }
}

console.log(pessoa.nomeInteiro);
console.log(pessoa.idade);
console.log(pessoa.ehEstudante);
console.log(pessoa.hobbies);
console.log(pessoa.endereco);

console.log(pessoa.endereco.pais); //Especificação 

for(const property in pessoa.endereco){
    console.log(pessoa.endereco[property]);
}

//Agora um pouco mais complexo

class Pessoa{ //Objeto pai
    constructor(nome, idade, ...endereco){
        this.nome = nome;
        this.idade = idade;
        this.endereco = new Endereco(...endereco);
    }
}

class Endereco{ //Objeto filho fofo 
    constructor(rua, cidade, pais){
        this.rua = rua;
        this.cidade = cidade;
        this.pais = pais;
    }
}

const pessoa1 = new Pessoa("Gustavo", 19, "Elzira Sammarco Palma 405", "Ribeirão Preto", "Brasil");
const pessoa2 = new Pessoa("Ana", 20, "Tupi Guarani", "Boa Vista", "Brasil");

console.log(pessoa2.endereco.cidade);
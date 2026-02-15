const nomes = ["Gustavo", "Ana", "Carol", "Julia", "Maria"];
const pessoa = {
    "nome": "BobEsponja",
    "idade": 18,
    "taTrabalhando": true,
    "hobbies": ["pular corda","matar crianças", "caçar aguas vivas"]
}
const pessoas = [{
    "nome": "BobEsponja",
    "idade": 18,
    "taTrabalhando": true
},
{
    "nome": "patric",
    "idade": 20,
    "taTrabalhando": false
},
{
    "nome": "lula molusco",
    "idade": 40,
    "taTrabalhando": true
}];

//Transforando objetos em JSONS

let jsonString = JSON.stringify(nomes);
console.log(jsonString);

jsonString = JSON.stringify(pessoa);
console.log(jsonString);

jsonString = JSON.stringify(pessoas);
console.log(jsonString);

//Tmb da pra fazer o contrario

const jsonNomes = '["Gustavo", "Ana", "Carol", "Julia", "Maria"]';
const jsonPessoa = '{"nome": "BobEsponja", "idade": 18, "taTrabalhando": true, "hobbies": ["pular corda","matar crianças", "caçar aguas vivas"]}'
const jsonPessoas = `[{ "nome": "BobEsponja", "idade": 18, "taTrabalhando": true },
                     { "nome": "patric", "idade": 20, "taTrabalhando": false },
                     { "nome": "lula molusco", "idade": 40, "taTrabalhando": true}]`

const nomesVoltados = JSON.parse(jsonNomes)
console.log(nomesVoltados)

const pessoaVoltados = JSON.parse(jsonPessoa)
console.log(pessoaVoltados)

const pessoasVoltados = JSON.parse(jsonPessoas)
console.log(pessoasVoltados)

//Tem o fetch tmb

fetch("pesssoa.json")
    .then(resposta => resposta.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("pessoas.json")
    .then(resposta => resposta.json())
    .then(valores => valores.forEach(valor => console.log(valor.nome) ))
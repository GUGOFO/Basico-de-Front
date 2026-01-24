//this é a forma preguiçosa de referenciar o msm objeto sksksk

//this n funciona com funções flechas () =>

const pessoaFoda = {
    nome: "gustavo",
    falaQuemEhFoda: function(){console.log(`O cara foda é ${this.nome}`)},
}

console.log(pessoaFoda.nome);
pessoaFoda.falaQuemEhFoda();
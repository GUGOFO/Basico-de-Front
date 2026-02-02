class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    displayProduto(){
        console.log(`Produto: ${this.nome}`);
        console.log(`Preco: $${this.preco}`);
    }

    calcularTotal(taxas){
        return this.preco + (this.preco * taxas);
    }
}

const taxas = 0.1;

const produto1 = new Produto("Camisa", 99);
const produto2 = new Produto("Cueca", 9);

produto1.displayProduto();

const total = produto1.calcularTotal(taxas);

console.log(`O preço total com taxa  $${total}`);
function Carro(modelo, ano, cor){
    this.ano = ano,
    this.cor = cor,
    this.modelo = modelo,
    this.dirige = function() {console.log(`voce dirige um ${this.modelo}`)}
}

const carro1 = new Carro("fusca", 1999, "azul");
const carro2 = new Carro("fiat", 199, "blue");

console.log(carro1.ano); //uau, coisas genericas
carro1.dirige();

carro2.dirige();
class Animal{
    vivo = true;

    comer(){
        console.log(`O ${this.nome} esta comendo`);
    }
    dormindo(){
        console.log(`O ${this.nome} esta dormindo`);
    }
}

class Rato extends Animal{
    nome = "Rato";
}
class Pintinho extends Animal{
    nome = "PintinhoRato";
}
class Orca extends Animal{
    nome = "Orca";
}

const rato = new Rato;
const pintinho = new Pintinho;
const orca = new Orca;

rato.vivo = false;
console.log(rato.vivo);

orca.comer();
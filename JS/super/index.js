//Basicamente um this para classe superior

class Animal{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    mover(velocidade){
        console.log(`Ele consegue se mover a ${velocidade}Km/h`);
    }
}

class Rato extends Animal{
    constructor(nome, idade, velocidade){
        super(nome, idade);
        this.velocidade = velocidade;
    }

    correr(){
        console.log(`O ${this.nome} consegue correr `);
        super.mover(this.velocidade);
    }
}

class Gaviao extends Animal{
    constructor(nome, idade, vooVelocidade){
        super(nome, idade);
        this.vooVelocidade = vooVelocidade;
    }

    voar(){
        console.log(`O ${this.nome} consegue voar `);
        super.mover(this.vooVelocidade);
    }
}

class Peixinho extends Animal{
    constructor(nome, idade, velocidadeDeNado){
        super(nome, idade);
        this.velocidadeDeNado = velocidadeDeNado;
    }

    nadar(){
        console.log(`O ${this.nome} consegue nadar `);
        super.mover(this.velocidadeDeNado);
    }
}

const rato = new Rato("Ratatui", 3, 5);
const gaviao = new Gaviao("vooadora", 1, 66);
const peixe = new Peixinho("nadadora", 13, 3);

console.log(rato.idade);
rato.correr();
peixe.nadar();
gaviao.voar();
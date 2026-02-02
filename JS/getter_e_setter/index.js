class Retangulo{

    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    set largura(newLargura){
        if(newLargura > 0){ //A logica que voce quer usar
            this._largura = newLargura;
        }
        else{ //erro que aparece
            console.error("largura tem q ser maior q zero")
        }
    }
    
    set altura(newAltura){
        if(newAltura > 0){
            this._altura = newAltura;
        }
        else{
            console.error("Altura tem q ser maior q zero")
        }
    }
    
    get largura(){ //oque volta, se n tiver fica undifined
        return this._largura;
    }
    
    get altura(){
        return this._altura;
    }

    get area(){ //pode criar coisas novas msm sem ter a variavel
        return this._altura * this._largura;
    }
}

const retangulo1 = new Retangulo(-1003203, "pizza");
const retangulo2 = new Retangulo(1003203, 3);

console.log(retangulo1.altura); 
console.log(retangulo1.largura);

console.log(retangulo2.altura); 
console.log(retangulo2.largura); 

retangulo1.altura = 10;
console.log(retangulo1.altura); 

console.log(retangulo2.area);
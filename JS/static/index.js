class Matematica{
    static PI = 3.1415;
    static getDiametro(raio){
        return raio * 2;
    }

    static getCircunferencia(raio){
        return this.PI * 2 * raio;
    }
}

console.log(Matematica.PI);
console.log(Matematica.getDiametro(4));
console.log(Matematica.getCircunferencia(4));

//Outro exemplo

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getNumDeUsuarios(){
        console.log(`Existem ${User.userCount} usuarios`);
    }

    darOi(){
        console.log(`Oi meu nome é ${this.username}`);
    }
}

const usuario1 = new User("Pateta");
const usuario2 = new User("bOB");
const usuario3 = new User("Tua mae");

usuario1.darOi();

console.log(User.userCount); //MUITO UTIL E POGGERS

User.getNumDeUsuarios();
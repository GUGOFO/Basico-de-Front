function parabens(username, idade){
    console.log("parabens");
    console.log("Parabens meu lindo");
    console.log("parabens pra vc");
    console.log(`parabens pra ${username}`);
    console.log(`meu lindo de ${idade}`);
}

parabens("Gugofo", 24);
parabens("Enzo", 102010);



function add(x, y){
    return x + y;
}

function diminuir(x, y){
    return x - y;
}

console.log(diminuir(2,3));

let x = 1, y = 2;

console.log(x);
console.log(y);

function troca(x ,y ){ //Não funciona, portanto cria uma nova instancia
    temp = x;
    x = y;
    y = temp;
}

console.log(x);
console.log(y);
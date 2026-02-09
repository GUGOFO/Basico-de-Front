try{ 
    console.log(X);
}
catch(error){
    console.error(error);
}
finally{
    //Normalemnte fecha portas ou arruma coisas, ele sempre é executado no final
}
console.log("Voce chegou ao fim");

//outro exemplo

try{
    const dividendo = Number(window.prompt("Dividendo:"));
    const divisor = Number(window.prompt("Divisor:"));
    
    if(divisor == 0){
        throw new Error("Tu n pode dividir por 0");
    }
    if(isNaN(dividendo) || isNaN(divisor)){
        throw new Error("Tem q ser numero man...");
    }

    const resultado = dividendo / divisor;
    console.log(resultado);
}
catch(error){
    console.log(error);
}

console.log("Chegou no fim de novo");
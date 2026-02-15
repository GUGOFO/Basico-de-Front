//Faça essas funções aqui:

// 1. Passear com cachorro
// 2. Lavar a Louça
// 3. Fazer dever de casa

function PassearComCachorro(){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const passeou = true;
            if(passeou) resolve("Voce passeou com o Cavalo");
            else reject("Voce NÃO passeu com o cachorro");
        }, 1000);
    }); 
}

function LavarLouça(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lavou = true;
            if(lavou) resolve("Voce lavou a Louça");
            else reject("Voce NÃO lavou a Louça");
        }, 4000);
    })
}

function FazerDeverDeCasa(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const fezDever = true
            if(fezDever) resolve("Voce fez o dever");
            else reject("Voce fez o dever");
        }, 2000);
    })
}

async function façaTarefas() {
    
    try{
        const passearCachorroResultado = await PassearComCachorro();
        console.log(passearCachorroResultado)
        
        const LavarLouçaResultado = await LavarLouça();
        console.log(LavarLouçaResultado)
        
        const FazerDeverDeCasaResultado = await FazerDeverDeCasa();
        console.log(FazerDeverDeCasaResultado)
    
        console.log("tudo certinho");
    }
    catch{
        console.error("fodeuu")
    }
}

console.log('A')
façaTarefas()
console.log('B')
//Calback hell é quando vc tenta fazer q varias funções a sincronas
//virem sincronas usando 30k de callbacks

function tarefa1(callback){
    setTimeout(() => {
        console.log("tarefa 1 feita")
        callback();
    },2000);
}

function tarefa2(callback){
    setTimeout(() => {
        console.log("tarefa 2 feita")
        callback();
    },1000);
}

function tarefa3(callback){
    setTimeout(() => {
        console.log("tarefa 3 feita")
        callback();
    },3000);
}

function tarefa4(callback){
    setTimeout(() => {
        console.log("tarefa 4 feita")
        callback();
    },500);
}

function tarefa5(callback){
    setTimeout(() => {
        console.log("tarefa 5 feita")
        callback();
    },2000);
}

//Assim funciona... mas é feih e dificil de ler
//faça com Promise

tarefa1(() => {
    tarefa2(() => {
        tarefa3(() => {
            tarefa4(() => {
                tarefa5(() => {
                    console.log("FOI PORRAAAAAAA")
                })
            })
        })
    })
})
//Synchronous code é basicamemte um codigo normal, ele roda linha por linha

//Asynchronous code é um codigo q pode ser executado em quanto outro tmb esta, basicamente varias linhas de uma vez; 

function funcao1(calback){
    setTimeout(() => {
        console.log("Tarefa 1")
        calback()
    },3000);
}

function funcao2(){
    console.log("Tarefa 2");
    console.log("Tarefa 3");
    console.log("Tarefa 4");
}

funcao1(funcao2); // Fazendo assim, o codigo que é Asyncrono pode virar sincrono
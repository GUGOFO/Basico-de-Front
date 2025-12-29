/*
    "x = y" --> faz x ficar igual a y 
    "x == y" --> compara se x é igual a y, retorna Bool
    "x === y" --> ve se x é igual a y e do msm tipo 
    "x != y" --> compara se x é igual a y, retorna se NÃO é igual
    "x !== y" --> ve se x NÃO é igual a y OU NÃO  do msm tipo 
*/

const PI = 3.14;

if(PI == "3.14") console.log("Vou cometer suicidio");
else console.log("Ufa, ainda bem q ta errado, quase me matei");

if(PI === "3.14") console.log("Vou cometer suicidio");
else console.log("Ufa, ainda bem q ta errado, quase me matei");
